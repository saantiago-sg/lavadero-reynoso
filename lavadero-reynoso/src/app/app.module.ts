import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_ROUTING } from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AnimateModule } from 'primeng/animate';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    AnimateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
