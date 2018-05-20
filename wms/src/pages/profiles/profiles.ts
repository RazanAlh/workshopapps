import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { WorkshopsProvider } from '../../providers/workshops/workshops';
import { DisplaycertificatePage } from '../displaycertificate/displaycertificate';


@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  
  workshops = [];
  certificates =[];
  profiles;
  errMess: string;

  constructor(private usersprovider: UsersProvider, public navCtrl: NavController, public navParams: NavParams,private workshopsservice: WorkshopsProvider) {
  }

  ngOnInit() {
    if (localStorage.getItem('wmslogin')) {
      let userid = localStorage.getItem('wmslogin');
      this.usersprovider.getProfiles(userid)
      .subscribe(profiles => {
        profiles[0].workshops.forEach(workshop => {
          this.workshopsservice.getWorkshop(workshop).subscribe(workshop => { this.workshops.push(workshop);},errmess => this.errMess = <any>errmess);
        });
        profiles[0].certificates.forEach(certificate => {
          this.workshopsservice.getWorkshop(certificate).subscribe(certificate => { this.certificates.push(certificate);},errmess => this.errMess = <any>errmess);
        });
      },
      errmess => this.errMess = <any>errmess);
    }
    else{
        this.errMess = "You must login befor make surveys";
    }
  }


  certificateSelected(certificate){
    if (localStorage.getItem('wmslogin')) {
        let userid = localStorage.getItem('wmslogin');
        this.usersprovider.getUser(userid)
        .subscribe(users => { 
            this.navCtrl.push(DisplaycertificatePage,{username: users.username, certificatename:certificate.name, certificatedate:certificate.startdate});      
        },
          errmess => this.errMess = <any>errmess);
    }
  }
}
