import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngOnInit() {
  } 
  // I have no idea what ngOnInit() does


  buttonClicked: boolean = false;

  constructor( private navCtrl: NavController) { }

  isButtonClicked() 
  {
    this.buttonClicked = true;
    console.log(this.buttonClicked); 
  }

  navigateToExistingRentals() 
  {
    this.navCtrl.navigateForward("existing-rentals");
  }

}
