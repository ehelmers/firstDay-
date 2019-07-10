import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  navigateToLogin() 
  {
    this.navCtrl.navigateForward("login");
  }

  ngOnInit() {
  }
  // I have no idea what ngOnInit() does


}
