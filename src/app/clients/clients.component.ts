import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/services/api.services';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public client;
  constructor(private getdata:ApiServices) {
    this.clients()
   }

  ngOnInit() {
  }
  clients(){
    var self=this;
    this.getdata.fetchuser().subscribe(function(res){
      self.client=res;
    })
  }

}
