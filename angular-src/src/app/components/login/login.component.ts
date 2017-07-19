import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;

  registered: String;

  loginError = false;
  loginErrorMessage = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) {

    this.registered = route.snapshot.params['message'];

  }

  ngOnInit() {
  }

  onLoginSubmit(){

    const user = {

      username: this.username,
      password: this.password

    }

    this.authService.authenticateUser(user).subscribe(data => {

      if(data.success){

        this.authService.storeUserData(data.token, data.user);

        this.router.navigate(['dashboard']);

      } else {

        this.loginError = true;
        this.loginErrorMessage = data.msg;

      }

    });

  }

}
