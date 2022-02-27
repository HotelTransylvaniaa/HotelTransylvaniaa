import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopDestinationComponent } from './components/Home/top-destination/top-destination.component';
import { TopDestinationListComponent } from './components/Home/top-destination-list/top-destination-list.component';
import { TopHotelComponent } from './components/Home/top-hotel/top-hotel.component';
import { TopHotelItemComponent } from './components/Home/top-hotel-item/top-hotel-item.component';
import { MainNavComponent } from './components/Navbar/main-nav/main-nav.component';
import { NavSignComponent } from './components/Navbar/nav-sign/nav-sign.component';
import { NavAccountComponent } from './components/Navbar/nav-account/nav-account.component';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { SearchBoxComponent } from './components/Home/search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchNavbarComponent } from './components/Home/search-navbar/search-navbar.component';
import { HotelsCardComponent } from './components/Hotels-search/hotels-card/hotels-card.component';
import { HotelsBadgeCardComponent } from './components/Hotels-search/hotels-badge-card/hotels-badge-card.component';
import { HotelsCardListComponent } from './components/Hotels-search/hotels-card-list/hotels-card-list.component';
import { HotelPageComponent } from './components/Hotels-search/hotel-page/hotel-page.component';




@NgModule({
  declarations: [
    AppComponent,
    TopDestinationComponent,
    TopDestinationListComponent,
    TopHotelComponent,
    TopHotelItemComponent,
    MainNavComponent,
    NavSignComponent,
    NavAccountComponent,
    HomePageComponent,
    SearchBoxComponent,
    SearchNavbarComponent,
    HotelsCardComponent,
    HotelsBadgeCardComponent,
    HotelsCardListComponent,
    HotelPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgSelectModule,
    NgSelectModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
