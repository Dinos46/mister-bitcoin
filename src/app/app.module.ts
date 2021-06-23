import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MisterBitcoinAppComponent } from './pages/mister-bitcoin-app/mister-bitcoin-app.component';
import { HeaderComponent } from './cmps/AppHeader/header.component';
import { AppFooterComponent } from './cmps/AppFooter/app-footer.component';
import { AppListComponent } from './cmps/AppList/app-list.component';
import { AppPreviewComponent } from './cmps/AppPreview/app-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsComponent } from './cmps/charts/charts.component';
import { LineChartComponent } from './cmps/line-chart/line-chart.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MisterBitcoinAppComponent,
    HeaderComponent,
    AppFooterComponent,
    AppListComponent,
    AppPreviewComponent,
    ContactDetailsPageComponent,
    HomePageComponent,
    StatisticPageComponent,
    AboutComponent,
    ContactFilterComponent,
    ChartsComponent,
    LineChartComponent,
    EditContactComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
