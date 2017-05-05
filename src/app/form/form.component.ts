import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  template: `
  <div class="col-md-8">

  <form [formGroup]="form" (ngSubmit)="onSubmit()">
     <label>Paddock Name</label>
     <input type="text" class="form-control">
     <div class="row">
      <div>
        <label>East to West Dimensions</label>
        <input type="text" formControlName="xaxis">
        <small [hidden]="myForm.controls.xaxis.valid || (myForm.controls.xaxis.pristine && !submitted)">
        </small>
      </div>


      <button type="submit">Submit</button>

    </form>
  `,
  styles: []
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
