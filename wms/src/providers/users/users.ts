import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { baseURL } from '../../shared/baseurl';
import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import { User } from '../../shared/user';
import { Profile } from '../../shared/profile';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsersProvider {

  constructor(public http: Http,
    private processHTTPMsgService: ProcessHttpmsgProvider) { }

  getUsers(): Observable<User[]> {
    return this.http.get(baseURL + 'users')
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getUser(id): Observable<User> {
    return this.http.get(baseURL + 'users/' + id)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  postUser(users): Observable<User> {
    return this.http.post(baseURL + 'users/', users)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getLogin(username, password): Observable<User[]> {
    return this.http.get(baseURL + 'users?email=' + username + '&password=' + password)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => { return this.processHTTPMsgService.handleError(error); });
  }

  getProfiles(userid): Observable<Profile> {
    return this.http.get(baseURL + 'profiles?userid=' + userid)
    .map(res => { return this.processHTTPMsgService.extractData(res); })
    .catch(error => { return this.processHTTPMsgService.handleError(error); });

  }
}
