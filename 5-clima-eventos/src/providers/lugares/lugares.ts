import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from '../../models/lugar';

// v4 LugaresProvider

@Injectable()
export class LugaresProvider {

  private lugares: Array<Lugar> = [];

  constructor() {
    this.lugares = [
      { nombre: 'CABA', ubicacion: { lat: -34.615940, lon: -55.900875 } },
      { nombre: 'Posadas', ubicacion: { lat: -27.362137, lon: -58.433450 } },
      { nombre: 'Usuahia', ubicacion: { lat: -54.766780, lon: -68.306055 } }
    ];
  }

  public getLugares(): Promise<Lugar[]> {
    return Promise.resolve(this.lugares);
  }

  public borrarLugar(lugar: Lugar) {
    let index = this.lugares.indexOf(lugar)
    if (index != -1) {
      this.lugares.splice(index, 1);
    }
  }

  public agregarLugar(lugar: Lugar) {
    this.lugares.push(lugar);
  }

}
