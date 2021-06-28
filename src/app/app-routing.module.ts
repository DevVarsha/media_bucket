import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WinterComponent} from './winter/winter.component';
import {SnowComponent} from './snow/snow.component';
import {SocialComponent} from './social/social.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {FaqComponent} from './faq/faq.component';
import {TComponent} from './t/t.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'winter', component: WinterComponent},
  { path: 'snow', component: SnowComponent},
  { path: 'social', component: SocialComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 't', component: TComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
