import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  usuario: LoginUsuario;
  isLogged = false;
  isLoginFail = false;
  roles: string [] = [];
  errorMsg = '';
  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router){

  }
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAthorities();
    }
  }

  onLogin(): void{
    this.usuario = new LoginUsuario(this.form.nombreUsuario, this.form.password)

    this.authService.login(this.usuario).subscribe(data=>{
      this.tokenService.setToken(data.token);
      this.tokenService.setUsrName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAthorities();
      window.location.reload;
    },
    (err:any)=>{
      this.isLogged = false;
      this.isLoginFail = true;
      this.errorMsg = err.error.message;
    }
    );
  }
  
}
