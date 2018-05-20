import { Injectable } from '@angular/core';
import { Contact } from '../../shared/contact';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactsProvider {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get(baseURL + 'contacts')
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getContact(id: number): Observable<Contact> {
    return this.http.get(baseURL + 'contacts/' + id)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  postContact(contacts): Observable<Contact> {
    return this.http.post(baseURL + 'contacts/', contacts)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

}
