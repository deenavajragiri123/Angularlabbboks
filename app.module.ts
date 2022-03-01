// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import {FormsModule} from '@angular/forms';
// import { EmployeeComponent } from './employee/employee.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { Page404Component } from './page404/page404.component';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { HttpClientModule } from '@angular/common/http';
// import { AddEmpComponent } from './add-emp/add-emp.component';
// import { ListEmpComponent } from './list-emp/list-emp.component';



// @NgModule({
//   declarations: [
//     AppComponent,
//     HeaderComponent,
//     FooterComponent,
//     EmployeeComponent,
//     LoginComponent,
//     RegisterComponent,
//     Page404Component,
//     HomeComponent,
//     UserComponent,
//     AddEmpComponent,
//     ListEmpComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule, 
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { HttpClientModule } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { ReactiveFormsModule } from "@angular/forms";  
  
import { AppComponent } from './app.component';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
import { EmployeeService } from './service/employee.service';
import { EmployeeComponent } from './employee/employee.component';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent, 
    EmployeeService, EmployeeComponent 
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule  
  ],  
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  

