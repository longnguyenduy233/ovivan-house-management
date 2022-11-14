import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { houseModel, houses } from '../consts/mockup-data.const';

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

}
