import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car-main-page.component';
import { CarItemComponent } from './car/car-item/car-item.component';
import { CarItemDetailsComponent } from './car/car-item-details/car-item-details.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/:id', component: CarItemDetailsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarComponent,
    CarItemComponent,
    CarItemDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
