import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { credential } from 'src/app/core/consts/mockup-data';
import { HeaderFacadeService } from '../../services/header.facade.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderFacadeService]
})
export class HeaderComponent implements OnInit {

  userName: string = credential.userName;
  password: string = credential.password;
  isLoggedIn$: Observable<any>;
  error$: Observable<any>;
  
  constructor(
    private headerFacadeService: HeaderFacadeService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.headerFacadeService.isLoggedIn$;
    this.error$ = this.headerFacadeService.error$;
  }

  onLogin() {
    this.headerFacadeService.login(this.userName, this.password);
  }

  onLogout() {
    this.headerFacadeService.logout();
  }
}
