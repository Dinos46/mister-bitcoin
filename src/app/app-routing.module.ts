import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MisterBitcoinAppComponent } from './pages/mister-bitcoin-app/mister-bitcoin-app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  {
    path: 'contact/:id/edit', component: EditContactComponent,
    resolve: { contact: ContactResolverService }
  },
  {
    path: 'contact/add', component: EditContactComponent 
  },
  {
    path: 'contact/:id', component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'stat', component: StatisticPageComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: MisterBitcoinAppComponent
  },
  {
    path: '', component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
