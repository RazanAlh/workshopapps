import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { Workshop } from '../../shared/workshop';
import { WorkshopsProvider } from '../../providers/workshops/workshops';
import { UsersProvider } from '../../providers/users/users';
import { DisplaysurveyPage } from '../displaysurvey/displaysurvey';

@Component({
  selector: 'page-workshops',
  templateUrl: 'workshops.html',
})
export class WorkshopsPage {

  workshops : Workshop[];
  profiles;
  errMess: string;

  
  constructor(private usersprovider: UsersProvider, public navCtrl: NavController, public navParams: NavParams,private workshopsservice: WorkshopsProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkshopsPage');
  }


  ngOnInit() {
    this.workshopsservice.getFeaturedWorkshop()
      .subscribe(workshops => { this.workshops = workshops;},
        errmess => this.errMess = <any>errmess);
  }

  makeSurveys(workshopid){
    if (localStorage.getItem('wmslogin')) {
      let userid = localStorage.getItem('wmslogin');
      this.usersprovider.getProfiles(userid)
      .subscribe(profiles => {
        let workshops = profiles[0].workshops.find(workshop => workshop === workshopid);
        if (workshops) {
          this.navCtrl.push(DisplaysurveyPage,{workshopid:workshopid});      
        }
        else {
            this.errMess = "Not register in this workshop";
         }
      },
      errmess => this.errMess = <any>errmess);
    }
    else{
        this.errMess = "You must login befor make surveys";
    }
  }
  
}