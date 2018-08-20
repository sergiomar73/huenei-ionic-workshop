import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ClimaPage } from '../pages/clima/clima';
import { LugaresPage } from '../pages/lugares/lugares';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LugaresProvider } from '../providers/lugares/lugares';
import { ClimaProvider } from '../providers/clima/clima';

@NgModule({
  declarations: [
    MyApp,
    ClimaPage,
    LugaresPage
  ],
  imports: [
    BrowserModule,
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
    LugaresProvider,
    ClimaProvider
  ]
})
export class AppModule {}
