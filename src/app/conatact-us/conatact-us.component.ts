import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-conatact-us',
  templateUrl: './conatact-us.component.html',
  styleUrls: ['./conatact-us.component.css']
})
export class ConatactUsComponent implements OnInit {

 

  constructor( ) { 
  }

  submitForm(formValue) {
    console.log(formValue);
  }

  ngOnInit() {
  }

}
