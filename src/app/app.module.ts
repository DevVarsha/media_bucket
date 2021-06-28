import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WinterComponent } from './winter/winter.component';
import { SnowComponent } from './snow/snow.component';
import { SocialComponent } from './social/social.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TComponent } from './t/t.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    WinterComponent,
    SnowComponent,
    SocialComponent,
    AboutusComponent,
    TComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
