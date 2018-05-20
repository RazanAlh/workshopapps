import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/user';
import { UsersProvider } from '../../providers/users/users';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  signinform: FormGroup;
  user : User;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private usersprovider: UsersProvider, private toastCtrl: ToastController) {

    this.signinform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)] ],
    });

  }

  ionViewDidLoad() {
  }

  signform() {
    this.navCtrl.push(SignupPage)
  }


  onSubmit(){
    this.user = this.signinform.value;
    this.usersprovider.getLogin(this.user.email, this.user.password)
      .subscribe(users => {
        if (users.length > 0){
            localStorage.setItem('wmslogin', String(users[0].id));
            this.signinform.reset(); 
            this.navCtrl.setRoot(HomePage);  
        }
        else
        {
          this.toastCtrl.create({
            message: 'can not login to system , email or password is not correct ... plase try agin',
            position: 'middle',
            duration: 3000}).present();
        }
      },
      errmess => this.errMess = <any>errmess);
  }

}
