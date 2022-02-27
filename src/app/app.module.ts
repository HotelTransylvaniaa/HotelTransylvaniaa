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
import { SearchBoxComponent } from './components/Home/search-box/search-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchNavbarComponent } from './components/Home/search-navbar/search-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    TopDestinationComponent,
    TopDestinationListComponent,
    TopHotelComponent,
    TopHotelItemComponent,
    SearchBoxComponent,
    SearchNavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgSelectModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
