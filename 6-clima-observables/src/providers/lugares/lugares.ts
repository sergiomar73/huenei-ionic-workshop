import { Injectable } from '@angular/core';
import { Lugar } from '../../models/lugar';

// v4 LugaresProvider
// v6 Observables
// 1) Crear un	RxJS	Subject,	especificamente un	Behavior	Subject que almacenará los datos a monitorear.
// 2) Crear el Observable	verdadero que monitoreará al Subject
// 3) Si ve cambios, emitirá (broadcast) los nuevos datos
// 4) Crear los Suscribers de nuestro Observable.
// Con todos estos pasos, los datos estarán siempre actualizados.
import { Observable, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class LugaresProvider {

  // v6 Observables
  // El símbolo $ es una convención
  private lugares: Array<Lugar> = [];
  private lugaresSubject: BehaviorSubject<Array<Lugar>> = new BehaviorSubject([]);
  public lugares$: Observable<Array<Lugar>> = this.lugaresSubject.asObservable();

  constructor() {
    this.lugares = [
      { nombre: 'CABA', ubicacion: { lat: -34.615940, lon: -55.900875 } },
      { nombre: 'Posadas', ubicacion: { lat: -27.362137, lon: -58.433450 } },
      { nombre: 'Usuahia', ubicacion: { lat: -54.766780, lon: -68.306055 } }
    ];
    this.refrescar();
  }

  // v6 Emite un nuevo cambio
  private refrescar() {
    this.lugaresSubject.next(this.lugares);
  }

  public getLugares(): Promise<Lugar[]> {
    return Promise.resolve(this.lugares);
  }

  public borrarLugar(lugar: Lugar) {
    let index = this.lugares.indexOf(lugar)
    if (index != -1) {
      this.lugares.splice(index, 1);
      this.refrescar();
    }
  }

  public agregarLugar(lugar: Lugar) {
    this.lugares.push(lugar);
    this.refrescar();
  }

}
