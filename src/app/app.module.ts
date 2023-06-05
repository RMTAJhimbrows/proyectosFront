import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './componentes/nav/nav.component';
import { LoginComponent } from './componentes/login/login.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardTypeComponent } from './componentes/card-type/card-type.component';
import { CategoryComponent } from './componentes/category/category.component';
import { ConfigurationComponent } from './componentes/configuration/configuration.component';
import { DocumentTypeComponent } from './componentes/document-type/document-type.component';
import { ExistingProductComponent } from './componentes/existing-product/existing-product.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { RolComponent } from './componentes/rol/rol.component';
import { SoldProductComponent } from './componentes/sold-product/sold-product.component';
import { SubCategoryComponent } from './componentes/sub-category/sub-category.component';
import { UserComponent } from './componentes/user/user.component';

const appRoutes: Routes = [

  {path:'', component:HomeComponent},
  {path: 'proyectos', component:ProductosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    HeaderComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    CardTypeComponent,
    CategoryComponent,
    ConfigurationComponent,
    DocumentTypeComponent,
    ExistingProductComponent,
    ProfileComponent,
    RolComponent,
    SoldProductComponent,
    SubCategoryComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
