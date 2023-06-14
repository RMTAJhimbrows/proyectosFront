import { Injectable } from '@angular/core';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';
import { Observable } from 'rxjs';

const cabecera = {headers: new HttpHeaders({'Content-type': 'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented.');
  }

  private authURL = 'http://localhost:8080/api/auth/&#39';
  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario) Observable<JwtModel>{
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuario, cabecera);
  }
}
