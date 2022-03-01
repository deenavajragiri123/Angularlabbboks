import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title: string = 'sfdc-angular-app';
  myName: string = 'Ashokza';
  // server creation 
  allowNewServer: boolean = false;
  serverStatus: string = "Not created";
  serverName: string = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);
  }

  createServer = () => {
    this.serverStatus = "Server created";
  }

  fun = (): string => {
    return 'data from fun method';
  }

  getServerName = (event: any) => {
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

}