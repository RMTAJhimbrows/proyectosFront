import { Component, OnInit } from '@angular/core';
import { TokenService } from './servicios/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejemplologin';

  isLogin = false;
  roles: string[];
  authority: string;
  constructor(private tokenService: TokenService, private router: Router) { }
  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogin = true;
      this.roles = this.tokenService.getAthorities();
      this.roles.every(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return true;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  logOut(): void {
    this.tokenService.logOut();
    this.isLogin =false;
    this.authority = '';
    this.router.navigate(['home']);
  }

}
