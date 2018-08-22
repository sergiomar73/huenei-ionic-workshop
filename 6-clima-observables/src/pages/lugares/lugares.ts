import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';

// v4
import { Lugar } from '../../models/lugar'
import { LugaresProvider } from '../../providers/lugares/lugares';
import { GeocodeProvider } from '../../providers/geocode/geocode';

@IonicPage()
@Component({
  selector: 'page-lugares',
  templateUrl: 'lugares.html',
})
export class LugaresPage {

  public lugares: Lugar[];
  public vista: string = 'list';

  constructor(
    private lugaresService: LugaresProvider, // v4
    private geocodeService: GeocodeProvider, // v4
    private alertCtrl: AlertController // v4
  ) {
    // v6 Cambio por Observables
    // this.lugaresService.getLugares().then((res: Lugar[]) => {
    //   this.lugares = res;
    // });
    this.lugaresService.lugares$.subscribe((lugares: Array<Lugar>) => {
      this.lugares = lugares;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugaresPage');
  }

  // v4 Botón Nuevo Lugar
  public nuevoLugar(): void {
    let prompt = this.alertCtrl.create({
      title: 'Nueva Ciudad',
      message: "Ingresá el nombre de la Ciudad",
      inputs: [
        {
          name: 'ciudad',
          placeholder: 'Ciudad, Provincia, País'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Agregar',
          handler: data => {
            console.log(`Ciudad ingresada -> ${data.ciudad}`);
            if (data.ciudad != '') {
              this.geocodeService.getUbicacion(data.ciudad).then((res: Lugar) => {
                this.lugaresService.agregarLugar(res);
                // this.events.publish('lugares:changed', {}); // v6
              });
            }
          }
        }
      ]
    });
    prompt.present();
  }

  public borrarLugar(lugar: Lugar) {
    this.lugaresService.borrarLugar(lugar);
    // this.events.publish('lugares:changed', {}); // v6
  }

}
