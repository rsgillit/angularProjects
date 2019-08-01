import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: [app-servers],
  //selector: '.app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = "Test Server";
  serverCreated = false;
  servers = ['Testserver', 'TeestServer 2'];

  constructor() { 
    setTimeout( () => {
        this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
