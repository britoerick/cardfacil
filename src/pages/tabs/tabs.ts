import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RegisterPage;;
  tab3Root = AboutPage;

  constructor() {

  }
}
