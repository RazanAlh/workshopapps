import { Injectable } from '@angular/core';
import { Surveyresult } from '../../shared/surveyresult';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class SurveyresultsProvider {

  constructor(public http: Http, private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getSurveyresults(): Observable<Surveyresult[]> {
    return this.http.get(baseURL + 'surveyresults')
              .map(res => {return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getSurveyresult(id: number): Observable<Surveyresult> {
    return  this.http.get(baseURL + 'surveyresults/'+ id)
              .map(res => { return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    submitSurveyresults(surveyresult): Observable <Surveyresult> {
      return this.http.post(baseURL + 'surveyresults/', surveyresult)
        .map(res => { return this.processHTTPMsgService.extractData(res); })
        .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

}