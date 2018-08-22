import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeocodeProvider {

  // @TODO Pasar a Environment
  private API_KEY: string = 'AIzaSyBGosJSs69lN9WPaa1-t6XprWlzkjzReYQ';

  constructor(
    private http: HttpClient
  ) {
  }

  getUbicacion(direccion: string): Promise<any> {
    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(direccion)}&key=${this.API_KEY}`;
    console.log(url);
    return new Promise(resolve => {
      this.http.get(url)
        //.map(res	=>	res.json())
        .subscribe((data: any) => {
          if (data.status === "OK") {
            // @TODO Resolver si hay más de 1 resultado!
            resolve({
              nombre: data.results[0].formatted_address,
              ubicacion: {
                latitude: data.results[0].geometry.location.lat,
                longitude: data.results[0].geometry.location.lng
              }
            });
          } else {
            // @TODO No encontró la dirección
            console.log(data);
            //reject
          }
        });
    });
  }
}
