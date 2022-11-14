import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { credential, token } from '../consts/mockup-data';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  login(username: string, password: string) {
    const url = `${this.baseUrl}auth`;
    const body = {
      data: {
        type: 'auth',
        attributes: {
          username: username,
          password: password
      }
      }
    };
    // return this.http.post(url, body);
    // TODO: mockup Token
    if (username === credential.userName && password === credential.password) {
      const mockupToken = this.generateToken();
      return of(mockupToken);
    }
    return throwError(() => new HttpErrorResponse({status: 401}));
  }

  private generateToken() {
    return token;
  }
}

