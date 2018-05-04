import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecargaCreditoPage } from '../recarga-credito/recarga-credito';
import { RecargaDebitoPage } from '../recarga-debito/recarga-debito';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  recargaDebito (){
    this.navCtrl.push(RecargaDebitoPage);
    
  }
  recargaCredito (){
    this.navCtrl.push(RecargaCreditoPage);
    
  }

}
