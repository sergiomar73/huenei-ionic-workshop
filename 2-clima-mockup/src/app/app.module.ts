import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; // v2

import { MyApp } from './app.component';
import { ClimaPage } from '../pages/clima/clima';
import { LugaresPage } from '../pages/lugares/lugares';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClimaProvider } from '../providers/clima/clima';
import { GeocodeProvider } from '../providers/geocode/geocode';

@NgModule({
  declarations: [
    MyApp,
    ClimaPage,
    LugaresPage
  ],
  imports: [
    BrowserModule,
    HttpModule, // v2
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClimaProvider,
    GeocodeProvider
  ]
})
export class AppModule {}
