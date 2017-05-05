import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="jumbotron custom-background">
      <div class="container-fluid custom-color">
        <div class ='row'>
          <div class='col-md-6'>
            <img class='custom-img' src='./assets/logo.png' alt='Out to Pasture Logo'/>
          </div>
          <div class='col-md-6'>
            <h1 style="font-size: 5.0em; color: #D8D9D8;font-family: 'Alfa Slab One', cursive; text-align: center;"> Land and Pasture Management Made Easy </h1>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [ `
    .custom-background {
      background:
        /* top, transparent red, faked with gradient */
        linear-gradient(
          rgba(0, 0, 0, 0.45),
          rgba(0, 0, 0, 0.45)
        ),
        url(assets/lane.jpg);
        background-size: cover;
        margin: 0px 0px 20px 0px;
    }
    .custom-font {
      font-family: 'Alfa Slab One', cursive;
      color: white;
    }
  `,]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
