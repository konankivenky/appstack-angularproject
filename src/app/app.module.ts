import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LeftcontainerComponent } from './leftcontainer/leftcontainer.component';
import { RightcontainerComponent } from './rightcontainer/rightcontainer.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';

import { DocumentationComponent } from './documentation/documentation.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ClientsComponent } from './clients/clients.component';
import { SignupComponent } from './signup/signup.component';


const Routes=[
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/dashboard'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'pages',
    component:PagesComponent
  },
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'documentation',
    component:DocumentationComponent
  },
  {
    path:'analytics',
    component:AnalyticsComponent
  },
  {
    path:'clients',
    component:ClientsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    LeftcontainerComponent,
    RightcontainerComponent,
    DashboardComponent,
    PagesComponent,
    FooterComponent,
    AuthComponent,
    DocumentationComponent,
    AnalyticsComponent,
    ClientsComponent,
    SignupComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
  
    RouterModule.forRoot(Routes,{})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
