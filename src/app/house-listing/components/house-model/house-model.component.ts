import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { masterData } from '../../consts/mockup-data.const';
import { House } from '../../models/house';
import { HouseCrudService } from '../../services/house-crud.service';

@Component({
  selector: 'app-house-model',
  templateUrl: './house-model.component.html',
  styleUrls: ['./house-model.component.scss']
})
export class HouseModelComponent implements OnInit {
  model = {
    id: null,
    houseNumber: '',
    blockNumber: '',
    landNumber: '',
    houseType: masterData.houseType[0],
    model: masterData.houseModel[0],
    status: masterData.status[0],
    price: null
  };

  houseTypeItems = masterData.houseType;
  houseModelItems = masterData.houseModel;
  statusItems = masterData.status;

  constructor(
    private houseCrudService: HouseCrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params && params['id']) {
        const id = parseInt(params['id']);
        this.houseCrudService.getHouseById(id).subscribe(rs => {
          this.model = {
            houseNumber: rs.houseNumber,
            blockNumber: rs.blockNumber,
            landNumber: rs.landNumber,
            houseType: rs.houseType,
            model: rs.model.model,
            status: rs.status,
            price: rs.price,
            id: rs.id
          };
        });
      }
    });
  }

  onCreateUpdate(model: House) {
    this.houseCrudService.createHouse(model);
  }

  onSubmit() {
    this.onCreateUpdate(this.model);
    this.router.navigate(['house-listing']);
  }
}
