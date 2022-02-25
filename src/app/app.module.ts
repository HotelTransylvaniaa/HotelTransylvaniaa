import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopDestinationComponent } from './components/Home/top-destination/top-destination.component';
import { TopDestinationListComponent } from './components/Home/top-destination-list/top-destination-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TopDestinationComponent,
    TopDestinationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
