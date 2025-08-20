import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ✅ add ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent } from './components/users.component/users.component';
import { RoomsComponent } from './components/rooms.component/rooms.component';
import { BookingsComponent } from './components/bookings.component/bookings.component';
import { PaymentsComponent } from './components/payments.component/payments.component';
import { RestaurantOrdersComponent } from './components/restaurant-orders.component/restaurant-orders.component';
import { HousekeepingComponent } from './components/housekeeping.component/housekeeping.component';
import { FeedbackComponent } from './components/feedback.component/feedback.component';
import { LoyaltyPointsComponent } from './components/loyalty-points.component/loyalty-points.component';
import { LoginComponent } from './components/login.component/login.component';
import { SignupComponent } from './components/signup.component/signup.component'; // ✅ add SignupComponent

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RoomsComponent,
    BookingsComponent,
    PaymentsComponent,
    RestaurantOrdersComponent,
    HousekeepingComponent,
    FeedbackComponent,
    LoyaltyPointsComponent,
    LoginComponent,
    SignupComponent // ✅ include here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // ✅ include here
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
