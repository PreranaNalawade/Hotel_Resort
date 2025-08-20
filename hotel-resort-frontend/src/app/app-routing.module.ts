import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './components/users.component/users.component';
import { RoomsComponent } from './components/rooms.component/rooms.component';
import { BookingsComponent } from './components/bookings.component/bookings.component';
import { PaymentsComponent } from './components/payments.component/payments.component';
import { RestaurantOrdersComponent } from './components/restaurant-orders.component/restaurant-orders.component';
import { HousekeepingComponent } from './components/housekeeping.component/housekeeping.component';
import { FeedbackComponent } from './components/feedback.component/feedback.component';
import { LoyaltyPointsComponent } from './components/loyalty-points.component/loyalty-points.component';
import { LoginComponent } from './components/login.component/login.component';
import { SignupComponent } from './components/signup.component/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: UsersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'restaurant-orders', component: RestaurantOrdersComponent },
  { path: 'housekeeping', component: HousekeepingComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'loyalty-points', component: LoyaltyPointsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
