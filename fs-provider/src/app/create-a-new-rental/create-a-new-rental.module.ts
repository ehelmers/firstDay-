import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateANewRentalPage } from './create-a-new-rental.page';

const routes: Routes = [
  {
    path: '',
    component: CreateANewRentalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateANewRentalPage]
})
export class CreateANewRentalPageModule {}
