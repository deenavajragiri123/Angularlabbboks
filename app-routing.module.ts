// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeeComponent } from './employee/employee.component';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { Page404Component } from './page404/page404.component';
// import { RegisterComponent } from './register/register.component';
// import { UserComponent } from './user/user.component';

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'employee', component: EmployeeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: '', component: HomeComponent },
//   { path: '**', component: Page404Component }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { RouterModule, Routes } from '@angular/router';  
import { ListEmpComponent } from './list-emp/list-emp.component';  
import { AddEmpComponent } from './add-emp/add-emp.component';  
  
export const routes: Routes = [  
  { path: '', component: ListEmpComponent, pathMatch: 'full' },  
  { path: 'list-emp', component: ListEmpComponent },  
  { path: 'add-emp', component: AddEmpComponent }  
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    RouterModule.forRoot(routes)  
  ],  
  exports: [RouterModule],  
  declarations: []  
})  
export class AppRoutingModule { } 

// [Route("~/api/GetAllEmployees")] // Add routes in all the methods  
// [HttpGet]  
// public IEnumerable GetEmployees() {  
//     return _context.Employees;  
// }  

