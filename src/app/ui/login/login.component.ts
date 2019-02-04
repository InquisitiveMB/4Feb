import { Component, OnInit } from '@angular/core';
import { AuthService, UserTokenPayload, TokenPayload} from '../../auth.service'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  result
  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  

  credentials: UserTokenPayload = {
    _id: '',
    uname: '',
    email: '',
    twitterID: '',
    gender: '',
    age: '',
    psw: ''
  }
  credentialsID: TokenPayload={
    twitterID_Card:''
  }
  dataS: any ='monika'
  dataLike: JSON;
  login(){
    this.auth.login(this.credentials).subscribe(
      (data) => {
        console.log(data)
        if(data.result === 'correct')
          this.router.navigateByUrl('/cardDeck')
        else if(data.result === 'wrong')
          window.alert("Please enter correct password")
        else
          window.alert("Username not exist")
      },
      err => {
        console.error(err);
      }
    )
    // this.router.navigateByUrl('/cards')
  }

  printValue(): JSON{
    return this.dataS;
  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.login()
      console.log('after login')
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
