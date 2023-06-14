import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'lista', component: ListaProductoComponent},
  {path:'detalle', component: DetalleProductoComponent},
  {path:'nuevo', component: NuevoProductoComponent},
  {path:'editar/id', component: EditarProductoComponent},
  
  {path:'login', component: LoginComponent},
  {path:'**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
