
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group ({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    this.authService.signup(email, password)
    .then(()=>{
      this.router.navigate(['/shop']);
    })
    .catch(
      (err: any)=>{
        this.errorMessage = err.message;
      }
    )
  }

}
