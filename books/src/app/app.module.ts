import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromBooks from './books';

import { TitleizePipe } from './titleize.pipe';

import { services } from './services';

// TitleizePipe.skipWords = ['of'];

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    TitleizePipe,
    NavComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],
  providers: [...services],
  bootstrap: [AppComponent],
})
export class AppModule {}
