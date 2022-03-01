import { NgModule  } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { HttpModule } from '@angular/http';  
import { RouterModule } from '@angular/router';  
import { AppComponent } from './components/app/app.component';  
import { NavMenuComponent } from './components/navmenu/navmenu.component';  
import { HomeComponent } from './components/home/home.component';  
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';  
import { CounterComponent } from './components/counter/counter.component';  
import { EmployeeComponent } from './components/Employee/employee.component';

// Added EmployeeComponent here  
@NgModule({  
    declarations: [  
        AppComponent,  
        NavMenuComponent,  
        CounterComponent,  
        FetchDataComponent,  
        HomeComponent,  
        EmployeeComponent // Added EmployeeComponent here  
    ],  
    imports: [  
        CommonModule,  
        HttpModule,  
        FormsModule,  
        RouterModule.forRoot([{  
                path: '',  
                redirectTo: 'home',  
                pathMatch: 'full'  
            }, {  
                path: 'employee',  
                component: EmployeeComponent  
            }, // Added EmployeeComponent here  
            {  
                path: 'home',  
                component: HomeComponent  
            }, {  
                path: 'counter',  
                component: CounterComponent  
            }, {  
                path: 'fetch-data',  
                component: FetchDataComponent  
            }, {  
                path: '**',  
                redirectTo: 'home'  
            }  
        ])  
    ]  
})  
export class AppModuleShared {}  
