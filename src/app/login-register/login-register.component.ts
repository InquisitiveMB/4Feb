import { Component, OnInit } from '@angular/core';
import { AuthService, UserTokenPayload } from '../auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component'
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private auth: AuthService, private formBuilder: FormBuilder) { }

  credentials: UserTokenPayload = {
    _id: '',
    uname: '',
    email: '',
    twitterID: '',
    gender: '',
    age: '',
    psw: '',
   };
  //  movieData: MovieData={
  //    movie: ''
  //  }
   register() {
    this.auth.register(this.credentials).subscribe(
      (data) => {
        // this.movieData = data
        // console.log(data[0].title);
        // const navgation: NavigationExtras = {state: {example: "hiiii"}};
        this.router.navigateByUrl('/cardDeck');
      },
      err => {
        console.error(err);
      }
    );
    // this.router.navigateByUrl('/cards');
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      uname: ['', Validators.required],
      twitterID: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
    this.register();
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
