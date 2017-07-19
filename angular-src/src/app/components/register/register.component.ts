import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }

  registerError = false;
  registerErrorMessage = "";

//Functionality on when the submit button is pressed on the Register page

  onRegisterSubmit(){

    const user = {

      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password

    }

    //Check required fields

    if(!this.validateService.validateRegister(user)){

      this.registerError = true;

      this.registerErrorMessage = 'Please fill in all fields';

      return false;

    }

    //Check email is valid

    if(!this.validateService.validateEmail(user.email)){

      this.registerError = true;

      this.registerErrorMessage = 'Please enter a valid email';

      return false;

    }

    //Register user

    this.authService.registerUser(user).subscribe(data => {

      if(data.success){

        this.router.navigate(['/login/registered']);

      } else {

        this.registerError = true;

        this.registerErrorMessage = data.msg;

        this.router.navigate(['/register']);

      }

    });

  }

}
