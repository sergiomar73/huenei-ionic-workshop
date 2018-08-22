import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ClimaPage } from '../pages/clima/clima';
import { LugaresPage } from '../pages/lugares/lugares';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClimaProvider } from '../providers/clima/clima';
import { GeocodeProvider } from '../providers/geocode/geocode';

// v2
// import { HttpModule, JsonpModule } from '@angular/http';
// v3
import { Geolocation } from '@ionic-native/geolocation';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LugaresProvider } from '../providers/lugares/lugares';

@NgModule({
  declarations: [
    MyApp,
    ClimaPage,
    LugaresPage
  ],
  imports: [
    BrowserModule,
    //HttpModule, // v2
    CommonModule, // v3
    HttpClientModule, // v3
    HttpClientJsonpModule, // v3
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ClimaPage,
    LugaresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ClimaProvider,
    GeocodeProvider,
    Geolocation, // v3
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresProvider,
  ]
})
export class AppModule {}
