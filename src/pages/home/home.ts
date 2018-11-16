import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = 'Tour of Heroes';

   heroes : String[]= ['Windstorm', 'Bombasto', 'Megatron', 'Tornado','Spiderman' , 'Batman' , 'Joker'];

  myHero = this.heroes[2];

  myhater= this.heroes[6]


  constructor(public navCtrl: NavController) {

  }

}
