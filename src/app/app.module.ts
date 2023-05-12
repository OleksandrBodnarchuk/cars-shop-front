import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car-main-page.component';
import { CarItemComponent } from './car/car-item/car-item.component';
import { CarItemDetailsComponent } from './car/car-item-details/car-item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarComponent,
    CarItemComponent,
    CarItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
