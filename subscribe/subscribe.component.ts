import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
//import{PasswordValidators} from './password.validators';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  form:FormGroup;

  constructor(fb:FormBuilder) { 
    this.form=fb.group({
      nom:new FormControl('', [Validators.required, Validators.minLength(5)]),
      prenom:new FormControl('', [Validators.required, Validators.minLength(5)]),
      email:new FormControl('', [Validators.required]),
      tel:new FormControl('', [Validators.required, Validators.minLength(8)]),
      pass:new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ]),
      repass:new FormControl('',[
        Validators.required
      ])
    
    })
  }
  get pass(){return this.form.get('pass');}
  get repass(){return this.form.get('repass');}
  get nom(){return this.form.get('nom');}
  get prenom(){return this.form.get('prenom');}
  get email(){return this.form.get('email');}
  get tel(){return this.form.get('tel');}

  inscription(){
    console.log(this.form.value)
  }

  ngOnInit() {
  }

}
