import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-existing-rentals',
  templateUrl: './existing-rentals.page.html',
  styleUrls: ['./existing-rentals.page.scss'],
})
export class ExistingRentalsPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  navigateToCreateNewRentalPage() 
  {
    this.navCtrl.navigateForward("create-a-new-rental");
  }
  navigateToRentalDetailsPage()
  {
    this.navCtrl.navigateForward("rentail-details");
  }

}
