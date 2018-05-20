import { Component, OnInit, Inject } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { User } from '../../shared/user';
import { UsersProvider } from '../../providers/users/users';
import { baseURL } from '../../shared/baseurl';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupform: FormGroup;
  user;
  errMess: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private usersprovider: UsersProvider,
    @Inject('BaseURL') private BaseURL ) {
    this.signupform = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)] ],
      email: ['', [Validators.required, Validators.email] ],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]*')] ],
      workplace: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  reset() {
    this.signupform.reset();
  }

  onSubmit(){
    this.user = this.signupform.value;
    this.usersprovider.postUser(this.user)
      .subscribe(users => {this.signupform.reset(); this.navCtrl.setRoot(LoginPage)},
        errmess => this.errMess = <any>errmess);
  }
}
