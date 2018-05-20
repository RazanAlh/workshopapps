import { Injectable } from '@angular/core';
import { Workshop } from '../../shared/workshop';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';


@Injectable()
export class WorkshopsProvider {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider) { }

    getWorkshopes(): Observable<Workshop[]> {
    return this.http.get(baseURL + 'workshops')
              .map(res => {return this.processHTTPMsgService.extractData(res); })
              //.catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getWorkshop(id: number): Observable<Workshop> {
    return  this.http.get(baseURL + 'workshops/'+ id)
              .map(res => { return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

    getFeaturedWorkshop(): Observable<Workshop []> {
    return this.http.get(baseURL + 'workshops?future=true')
              .map(res => { return this.processHTTPMsgService.extractData(res); })
              .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }

}