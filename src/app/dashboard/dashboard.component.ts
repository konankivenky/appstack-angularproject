import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/services/api.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public dashboard;
  constructor(private getdata:ApiServices) {
    this.dashboarduser()
   }

  ngOnInit() {
  }
  dashboarduser(){
    var self=this;
    this.getdata.fetchuser().subscribe(function(res){
      self.dashboard=res;
    })
  }

}
