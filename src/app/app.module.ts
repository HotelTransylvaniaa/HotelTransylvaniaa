import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopDestinationComponent } from './components/Home/top-destination/top-destination.component';
import { TopDestinationListComponent } from './components/Home/top-destination-list/top-destination-list.component';
import { TopHotelComponent } from './components/Home/top-hotel/top-hotel.component';
import { TopHotelItemComponent } from './components/Home/top-hotel-item/top-hotel-item.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    AppComponent,
    TopDestinationComponent,
    TopDestinationListComponent,
    TopHotelComponent,
    TopHotelItemComponent,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
