import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus = 'No Server was created!';
  serverName= '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(event) {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    //console.log(event.target);
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event.target.value);
  }

}
