import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadosService) {

    //this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  agregarEmpleado(): void {

    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSueldo);
    //this.miServicio.muestraMensaje("Nombre del Empleado: "+ miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSueldo: number = 0;

}
