import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { CoinpickerComponent } from './coinpicker/coinpicker.component';
import { CoinportfolioComponent } from './coinportfolio/coinportfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinpickerComponent,
    CoinportfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
