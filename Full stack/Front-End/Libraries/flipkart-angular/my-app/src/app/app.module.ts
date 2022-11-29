import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { ButtonComponent } from './mycomponents/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent,
    ButtonComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
