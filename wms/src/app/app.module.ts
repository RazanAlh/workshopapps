import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule} from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { WorkshopsPage } from '../pages/workshops/Workshops';
import { LoginPage } from '../pages/login/login';
import { DisplaysurveyPage } from '../pages/displaysurvey/displaysurvey';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilesPage } from '../pages/profiles/profiles';
import { DisplaycertificatePage } from '../pages/displaycertificate/displaycertificate';

import { WorkshopsProvider } from '../providers/workshops/workshops';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from '../shared/baseurl';
import { ContactsProvider } from '../providers/contacts/contacts';
import { UsersProvider } from '../providers/users/users';
import { SurveyProvider } from '../providers/survey/survey';
import { SurveyresultsProvider } from '../providers/surveyresults/surveyresults';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkshopsPage,
    LoginPage,
    SignupPage,
    DisplaysurveyPage,
    ProfilesPage,
    DisplaycertificatePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WorkshopsPage,
    LoginPage,
    SignupPage,
    DisplaysurveyPage,
    ProfilesPage,
    DisplaycertificatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WorkshopsProvider,
    { provide: 'BaseURL', useValue: baseURL },
    ProcessHttpmsgProvider,
    WorkshopsPage,
    ContactsProvider,
    UsersProvider,
    SurveyProvider,
    SurveyresultsProvider
  ]
})
export class AppModule {}
