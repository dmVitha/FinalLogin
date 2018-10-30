import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';

import { AuthServicesService } from '../services/auth-services.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  model={
    email:'',
    password:''

};

  constructor(
    
    private router: Router,
    private authService: AuthServicesService,
   
    ) { }

  ngOnInit() {
   
    // get return url from route parameters or default to '/'
  }

  // convenience getter for easy access to form fields
  

  onSubmit() {
    // stop here if form is invalid
   console.log(this.model)
    
    this.authService.login(this.model.email, this.model.password)
      .pipe(first())
      .subscribe(
        res =>{console.log(res)
          this.router.navigate(['/profile']);
        },
        
        error => {
          window.alert(error);
          console.log(error)
        });

  }

}
