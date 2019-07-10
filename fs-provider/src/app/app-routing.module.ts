import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'existing-rentals', loadChildren: './existing-rentals/existing-rentals.module#ExistingRentalsPageModule' },
  { path: 'create-a-new-rental', loadChildren: './create-a-new-rental/create-a-new-rental.module#CreateANewRentalPageModule' },
  { path: 'rentail-details', loadChildren: './rentail-details/rentail-details.module#RentailDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
