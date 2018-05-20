import { Injectable } from '@angular/core';
import { Survey } from '../../shared/survey';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class SurveyProvider {

  constructor(public http: Http, private processHTTPMsgService: ProcessHttpmsgProvider) { }

    getSurveyes(): Observable<Survey[]> {
    return this.http.get(baseURL + 'surveys')
              .map(res => {return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getSurvey(id: number): Observable<Survey> {
    return  this.http.get(baseURL + 'surveys/'+ id)
              .map(res => { return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getWorkshopSurvey(workshopid: number): Observable<Survey []> {
    return this.http.get(baseURL + 'surveys?workshopid=' + workshopid)
              .map(res => { return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

}