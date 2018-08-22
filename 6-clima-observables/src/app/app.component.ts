import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ClimaPage } from '../pages/clima/clima';
import { LugaresPage } from '../pages/lugares/lugares';
import { Ubicacion } from '../models/ubicacion'; // v4
import { LugaresProvider } from '../providers/lugares/lugares'; // v4
import { Lugar } from '../models/lugar'; // v4

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ClimaPage;

  // v2 Agrego Icono
  // v4 Agrego Posición
  pages: Array<{ title: string, component: any, icon: string, ubicacion?: Ubicacion }>;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private lugaresService: LugaresProvider // v4
  ) {
    this.initializeApp();
    this.obtenerLugares();
    // v6 Refresca los Lugares
    // events.subscribe('lugares:changed', () => {
    //   this.obtenerLugares();
    // });
    // v2 Agrego Icono
    // v4 Paso a método
    // this.pages = [
    //   // v2
    //   // { title: 'Clima', component: ClimaPage, icon: 'create' },
    //   // { title: 'Lugares', component: LugaresPage, icon: 'pin' }
    // ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  obtenerLugares() {
    // v6 Cambio por Observables
    // this.lugaresService.getLugares().then((res: Lugar[]) => {
    this.lugaresService.lugares$.subscribe((lugares: Array<Lugar>) => {
      this.pages = [
        { title: 'Editar Lugares', component: LugaresPage, icon: 'create' },
        { title: 'Ubicación actual', component: ClimaPage, icon: 'pin' }
      ];
      for (let lugar of lugares) {
        this.pages.push({
          title: lugar.nombre,
          component: ClimaPage,
          icon: 'pin',
          ubicacion: lugar.ubicacion
        });
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // v2
    // this.nav.setRoot(page.component);
    // v4
    if (page.hasOwnProperty('ubicacion')) {
      this.nav.setRoot(page.component, { ubicacion: page.ubicacion, nombre: page.title });
    } else {
      this.nav.setRoot(page.component);
    }
  }
}
