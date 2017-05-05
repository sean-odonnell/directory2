import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  template: `
  <div class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a routerLink="home"><h1 class='custom-font'>OUT TO PASTURE</h1></a>
      </div>
      <div class="navbar-collapse collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="active">
            <a routerLink="home" routerLinkActive="active"><h4 class='custom-font'>Home</h4></a>
          </li>
          <li>
              <a routerLink="design" routerLinkActive="active"><h4 class='custom-font'>Design</h4></a>
          </li>
          <li>
            <a routerLink="storage" routerLinkActive="active"><h4 class='custom-font'>Storage</h4></a>
          </li>
          <li>
            <a routerLink="about" routerLinkActive="active"><h4 class='custom-font'>About</h4></a>
          </li>
        </ul>
        <!-- <form class="navbar-form navbar-right">
          <div class="form-group">
            <input type="text" placeholder="Email" class="form-control custom-alignment">
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control custom-alignment">
          </div>
          <button type="submit" class="btn btn-success custom-alignment">
            Sign in
          </button>
        </form> -->
      </div>
      <!--/.navbar-collapse -->
    </div>
  </div>
  `,
  styles: [`
    .custom-font {
      font-family: 'Alfa Slab One', cursive;
      color: #D8D9D8;
    }
  `]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
