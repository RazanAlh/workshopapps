import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { WorkshopsPage } from '../workshops/Workshops';
import { LoginPage } from '../login/login';
import { ProfilesPage } from '../profiles/profiles';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = WorkshopsPage;
  tab4Root = ContactPage;
  tab5Root = ProfilesPage;
  tab6Root = LoginPage;

  constructor() {

  }
}
