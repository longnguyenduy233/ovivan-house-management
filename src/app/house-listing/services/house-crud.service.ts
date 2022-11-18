import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { houseModel, houses } from '../consts/mockup-data.const';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseCrudService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getHouseModels() {
    const url = `${this.baseUrl}house_models`;
    // return this.http.get(url);
    // TODO: mockup data
    return of(houseModel);
  }

  getHouses() {
    const url = `${this.baseUrl}houses`;
    // return this.http.get(url);
    // TODO: mockup data
    return of(houses);
  }

  getHouseById(id: number) {
    return of(houses.find(item => item.id === id));
  }

  createHouse(house: House) {
    const url = `${this.baseUrl}houses`;
    const body = {
      data: {
        type: 'houses',
        attributes: {
          house_number: house.houseNumber,
          block_number: house.blockNumber,
          land_number: house.landNumber,
          model: house.model,
          house_type: house.houseType,
          price: house.price
        }
      }
    };
    // return this.http.post(url, body);
    // TODO: mockup data
    const mockupHouse = houses;
    const mockupHouseIds = mockupHouse.map(item => item.id);
    const maxId = Math.max(...mockupHouseIds);
    const newId = maxId + 1;
    const model = houseModel.find(item => item.model === house.model);
    const newHouse = {
      ...house,
      id: newId,
      model: model
    }
    if (!house.id) {
      mockupHouse.push(newHouse);
    } else {
      newHouse.id = house.id;
      const idx = houses.findIndex(item => item.id === house.id);
      if (idx !== -1) {
        houses[idx] = newHouse;
      }
    }
    return of(houses);
  }

}
