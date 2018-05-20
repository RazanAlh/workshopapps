import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-displaycertificate',
  templateUrl: 'displaycertificate.html',
})
export class DisplaycertificatePage {

  username;
  certificatename;
  certificatedate;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.username = this.navParams.get('username');
    this.certificatename = this.navParams.get('certificatename');
    this.certificatedate = this.navParams.get('certificatedate');

    console.log(this.username);
    console.log(this.certificatename);
    console.log( this.certificatedate);
  }

}
