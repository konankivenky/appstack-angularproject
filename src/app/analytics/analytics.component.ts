import { Component, OnInit } from '@angular/core';
import { ApiServices } from 'src/services/api.services';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  public analyticss;
  constructor(private getdata:ApiServices) {
    this.analytics()
   }

  ngOnInit() {
  }
  analytics(){
    var self=this;
    this.getdata.fetchuser().subscribe(function(res){
      self.analyticss=res;
    })
  }

}
