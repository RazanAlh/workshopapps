import { Component } from '@angular/core';
import { NavController, NavParams, ToastController} from 'ionic-angular';

import { Survey } from '../../shared/survey';
import { Question } from '../../shared/question';
import { Result } from '../../shared/result';

import { SurveyProvider } from '../../providers/survey/survey';
import { SurveyresultsProvider } from '../../providers/surveyresults/surveyresults';

import { HomePage } from '../home/home';


@Component({
  selector: 'page-displaysurvey',
  templateUrl: 'displaysurvey.html',
})
export class DisplaysurveyPage {
  workshopid = 0
  survey: Survey;
  question : Question;
  errMess: string;
  results = Result;
  questionresults = [];
  surveyresults;

  constructor(public navCtrl: NavController, public navParams: NavParams, private surveyprovider: SurveyProvider, private surveyresultsprovider : SurveyresultsProvider, private toastCtrl: ToastController) {}

  ngOnInit() {
    this.workshopid = this.navParams.get('workshopid');
    this.surveyprovider.getWorkshopSurvey(this.workshopid)
    .subscribe(survey => { this.survey = survey[0];},
      errmess => this.errMess = <any>errmess);
  }
//save question to array [questionresults]
  addquestion(resultid, questionid){
    let qres = {questionid:questionid, result:resultid}
    let questionresultrec = this.questionresults.find(questions => questions.questionid === questionid);
    if (questionresultrec) {
      console.log(questionresultrec);
      const index: number = this.questionresults.indexOf(questionresultrec);
      this.questionresults.splice(index,1);
      this.questionresults.push(qres);
    }
    else{
      this.questionresults.push(qres);
    }
    console.log(this.questionresults);
  }

// save all surveys results to database
  saveAll() {
    if (localStorage.getItem('wmslogin')) {
      let userid = localStorage.getItem('wmslogin');
      this.surveyresults = {surveyid:this.survey.id, userid:userid, results: this.questionresults}

      this.surveyresultsprovider.submitSurveyresults(this.surveyresults)
      .subscribe(users => {
        this.toastCtrl.create({
          message: 'thanks for making survey for this workshop',
          position: 'middle',
          duration: 3000}).present();
        this.navCtrl.setRoot(HomePage);
      },
        errmess => this.errMess = <any>errmess);
    }
  }
}
