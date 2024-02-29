import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private router:Router){}

  loginForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
      this.loginForm=this.fb.group(
        {
          username:['',Validators.required],
          password:['',Validators.required],
          rememberMe:[false]
        }
      )
  }

  login(){
    debugger;
    if(this.loginForm.invalid){
      return;
    }
   console.log(this.loginForm.controls) 
  }

  register(){
    this.router.navigate(['register']);
  }

}
