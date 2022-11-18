import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subscription } from 'rxjs';
import { ArrayUtil } from 'src/app/core/utils/array.util';
import { House, HouseModel } from '../../models/house-model';
import { HouseCrudService } from '../../services/house-crud.service';
import { HouseListingFacadeService } from '../../services/house-listing.facade.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss'],
  providers: [HouseListingFacadeService]
})
export class HouseListComponent implements OnInit, OnDestroy {
  @ViewChild('acc', { static: true }) accordion: NgbAccordion;
  columns = [
    {
      key: 'houseNumber',
      label: 'House number'
    },
    {
      key: 'blockNumber',
      label: 'Block No'
    },
    {
      key: 'landNumber',
      label: 'Land No'
    },
    {
      key: 'price',
      label: 'Price'
    },
    {
      key: 'status',
      label: 'Status'
    },
    {
      key: 'action',
      label: 'Action',
      hidden: true,
      onClick: (rowData) => this.onColumActionClick(rowData)
    },
  ];

  isLoggedIn$: Observable<boolean>;
  houseModels: HouseModel[];
  houses: House[];
  houseGroupsByModel: House[][];
  allValue = ' ';
  blockNumberItems = [
    {
      label: 'Block number',
      value: this.allValue
    }
  ];
  selectedBlockNumber = this.allValue;
  landNumberItems = [
    {
      label: 'Land number',
      value: this.allValue
    }
  ];
  selectedLandNumber = this.allValue;
  minPriceItems = [
    {
      label: 'Min price',
      value: this.allValue
    }
  ];
  selectedMinPrice = this.allValue;
  maxPriceItems = [
    {
      label: 'Max price',
      value: this.allValue
    }
  ];
  selectedMaxPrice = this.allValue;
  subscription = new Subscription();

  constructor(
    private houseListingFacadeService: HouseListingFacadeService,
    private houseCrudService: HouseCrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.houseListingFacadeService.isLoggedIn$;
    this.subscription.add(
      this.houseListingFacadeService.isLoggedIn$.subscribe(rs => {
        this.columns[this.columns.length - 1].hidden = !rs;
      })
    );
    this.getHouseModel();
    this.getHouse();
  }

  getHouseModel() {
    this.houseCrudService.getHouseModels().subscribe(rs => {
      if (rs) {
        this.houseModels = rs;
      }
    });
  }

  getHouse() {
    this.houseCrudService.getHouses().subscribe(rs => {
      if (rs) {
        this.houses = rs.filter(item => item.model);
        const houseGroupsByModel = ArrayUtil.groupBy(this.houses, house => house.model.model);
        this.houseGroupsByModel = houseGroupsByModel;
        this.getCriteria();
      }
    });
  }

  onUpdateFilter() {
    const selectedMinPrice = parseInt(this.selectedMinPrice);
    const selectedMaxPrice = parseInt(this.selectedMaxPrice);
    const rs = this.houses.filter(item =>
      (this.selectedBlockNumber === this.allValue ? true : item.blockNumber === this.selectedBlockNumber) &&
      (this.selectedLandNumber === this.allValue ? true : item.landNumber === this.selectedLandNumber) &&
      (this.selectedMinPrice === this.allValue ? true : item.price >= selectedMinPrice) &&
      (this.selectedMaxPrice === this.allValue ? true : item.price <= selectedMaxPrice)
    );
    const houseGroupsByModel = ArrayUtil.groupBy(rs, house => house.model.model);
    this.houseGroupsByModel = houseGroupsByModel;
    if (houseGroupsByModel.length > 0) {
      this.accordion.expand(houseGroupsByModel[0][0]?.model?.id.toString());
    }
  }

  private getCriteria() {
    const blockNumbers = this.createCriteriaItem('blockNumber');
    this.blockNumberItems = [...this.blockNumberItems, ...blockNumbers];
    const landNumbers = this.createCriteriaItem('landNumber');
    this.landNumberItems = [...this.landNumberItems, ...landNumbers];
    const prices = this.createCriteriaItem('price');
    this.minPriceItems = [...this.minPriceItems, ...prices];
    this.maxPriceItems = [...this.maxPriceItems, ...prices];
  }

  private createCriteriaItem(criteriaKey: string) {
    const itemsTmp = this.houses.map(item => item[criteriaKey]);
    const itemSet = new Set(itemsTmp);
    const itemArray = Array.from(itemSet);
    const items = (itemArray || []).map(item => ({ label: item, value: item }));
    return items;
  }

  onCreateHouse() {
    this.router.navigate(['create'], {relativeTo: this.activatedRoute});
  }

  onColumActionClick(rowData) {
    this.router.navigate(['edit', rowData.id], {relativeTo: this.activatedRoute});
  }
}
