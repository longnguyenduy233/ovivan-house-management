import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseModelComponent } from './house-model.component';

describe('HouseModelComponent', () => {
  let component: HouseModelComponent;
  let fixture: ComponentFixture<HouseModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
