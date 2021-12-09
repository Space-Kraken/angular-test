import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ApiCharactersListComponent } from './api-characters-list/api-characters-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ColorSelectorComponent } from './color-selector/color-selector.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ApiCharactersListComponent,
    NavbarComponent,
    HomeComponent,
    ColorSelectorComponent,
    SigninPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
