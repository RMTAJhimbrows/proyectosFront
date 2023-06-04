import { Component, ElementRef } from '@angular/core';
import { ProyectoServiceService } from '../servicios/proyecto.service';
import { ProyectosService } from '../servicios/proyectos.service';
import { LoginService } from '../servicios/login.service';
import { CardTypeService } from '../servicios/cardType.service';

@Component({
  selector: 'app-login',
  template: `<form class="d-flex">
  <input class="form-control me-2" type="text" placeholder="Usuario">
  <input class="form-control me-2" type="text" placeholder="Contraseña">
  <button class="btn btn-secondary" type="button">Ingresar</button>
  &nbsp;
  <button class="btn btn-secondary" type="button">Registrar</button>
</form>`

})

export class LoginComponent {

  logado: boolean=false;
  inputUsuario: string="";
  inputPassword: string="";
  usuario: string="";

  constructor(private http: ProyectosService, private elementRef: ElementRef, 
    private loginService: LoginService, private cardTypeService: CardTypeService) {}

  getFees(){
    console.log("Sacando fees con token"+ sessionStorage['token']);
    this.cardTypeService.getDatos("http://localhost:8080/once/cardtypes")
    .subscribe((datos: any)=> {
      console.log(datos)
      datos._embedded.cardTypes.forEach((element: any)=>{
        console.log(element.)
      })
    })
  }
}
