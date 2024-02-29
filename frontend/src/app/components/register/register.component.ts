import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  public registerForm:any=new FormGroup({});

  public submitted:boolean=false;

  ngOnInit(): void {
      this.registerForm=this.fb.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8),
            Validators.maxLength(20),]],
          c_password:['',[Validators.required]],
      })
  }

  signUp(){
    debugger;
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.controls)
  }

}
