import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { GameBarComponent } from './components/template/game-bar/game-bar.component';
import { LojaComponent } from './components/template/loja/loja.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    GameBarComponent,
    LojaComponent,
    HamburgerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
