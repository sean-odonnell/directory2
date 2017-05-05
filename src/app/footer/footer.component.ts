import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="bg-faded custom-dark">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h1 class=" pi-item">Out To Pasture</h1>
        <p> <strong>Designed by Sean O'Donnell</strong> <br>2000 Broadway<br>San Francisco, CA 94115 <br> <abbr title="Phone">P:</abbr>(415) 279-8577 <br> E: code-geek@outlook.com <br> W: <a href='http://denovo.tech'>http://denovo.tech</a> </p>
      </div>
      <div class="col-md-6">
        <h1 class="pi-item">CONTACT</h1>
        <form>
          <fieldset class="form-group"> <label for="exampleInputEmail1">Your name</label> <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Your name"> </fieldset>
          <fieldset class="form-group"> <label for="exampleInputEmail1">Email address</label> <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"> </fieldset> <button type="submit" class="btn btn-primary">Submit</button> </form>
      </div>
    </div>
  </div>
</div>
<div>
  <!--content-->
</div>
  `,
  styles: [`
    .custom-dark {
      background-color: #262B34;
      color: #D8D9D8;
      margin-top: 30px;
      box-shadow: 0px 500px 0px 500px #252A34;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
