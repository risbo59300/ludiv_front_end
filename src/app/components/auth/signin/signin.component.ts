import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm : FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email:[null, Validators.required, Validators.email],
      password:[null, Validators.required],
    });
  }

  onSubmit(){
    const email = this.signinForm.get('email')?.value;
    const password = this.signinForm.get('password')?.value;
    this.authService.signin(email, password)
    .then(
      ()=>{
        this.router.navigate(['/shop']);
      }
    ).catch(
      (error)=>{
        this.errorMessage = error.message;
      }
    );
  }

}
