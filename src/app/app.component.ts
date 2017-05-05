import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgLocalization } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing-module;

@Component({
  selector: 'app-root',
  template: `

  <app-navbar></app-navbar>
  <div class='container'>
    <div class='row'>
      <div class='col-md-8'>
      <router-outlet></router-outlet>
      </div>
      <div class='col-md-4'>
        <app-form></app-form>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'app works!';
}
