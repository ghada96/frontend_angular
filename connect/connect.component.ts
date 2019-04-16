import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  form:FormGroup;


  constructor(fb:FormBuilder) { 
    this.form=fb.group({
      
      email:new FormControl('',[
        Validators.required,
        
      ]),
      pass:new FormControl('',[
        Validators.required
      ])
    
    })
  }

  ngOnInit() {
  }
  get email(){return this.form.get('email');}
  get pass(){return this.form.get('pass');}

  inscription(){

  }



}
