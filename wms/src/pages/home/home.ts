import { Component, OnInit, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Workshop } from '../../shared/workshop';
import { WorkshopsProvider } from '../../providers/workshops/workshops';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  workshops : Workshop[];
  errMess: string;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams,
    private workshopsservice: WorkshopsProvider,
    @Inject('BaseURL') private BaseURL ) {
    }
    
    ngOnInit() {
      this.workshopsservice.getWorkshopes()
        .subscribe(workshops => {this.workshops = workshops;},
          errmess => this.errMess = <any>errmess);
    }
}
