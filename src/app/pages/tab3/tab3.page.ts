import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  sonido = new Audio();

  slideOpts = {
    freeMode: false,
    spaceBetween: 0,
  };

  colores = [
    {
      audio: 'assets/audios/rojo.mp3',
      color: '#FF0000',
    },
    {
      audio: 'assets/audios/verde.mp3',
      color: '#00FF00',
    },
    {
      audio: 'assets/audios/azul.mp3',
      color: '#485aff',
    },
    {
      audio: 'assets/audios/blanco.mp3',
      color: '#FFFFFF',
    },
    {
      audio: 'assets/audios/naranja.mp3',
      color: '#ff8000',
    },
    {
      audio: 'assets/audios/gris.mp3',
      color: '#C0C0C0',
    },
    {
      audio: 'assets/audios/rosa.mp3',
      color: '#ea899a',
    },
    {
      audio: 'assets/audios/morado.mp3',
      color: '#572364',
    },
    {
      audio: 'assets/audios/amarillo.mp3',
      color: '#FFFF00',
    },
    {
      audio: 'assets/audios/marron.mp3',
      color: '#804000',
    },
    {
      audio: 'assets/audios/negro.mp3',
      color: '#000000',
    },
  ];


  constructor() {}

  reproducir( color ) {
    this.sonido.src = color.audio;
    this.sonido.load();
    this.sonido.play();

  }

}
