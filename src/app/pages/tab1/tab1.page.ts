import { Component } from '@angular/core';
// import { Animal } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  sonido = new Audio();

  slideOpts = {
    freeMode: false,
    spaceBetween: 50,
  };


  animales = [
    {
      nombre: 'Burro',
      img: 'assets/img/burro.png',
      audio: 'assets/audios/burro.mp3'
    },
    {
      nombre: 'Caballo',
      img: 'assets/img/caballo.png',
      audio: 'assets/audios/caballo.mp3'
    },
    {
      nombre: 'Cerdo',
      img: 'assets/img/cerdo.png',
      audio: 'assets/audios/cerdo.mp3'
    },
    {
      nombre: 'Elefante',
      img: 'assets/img/elefante.png',
      audio: 'assets/audios/elefante.mp3'
    },
    {
      nombre: 'Gallo',
      img: 'assets/img/gallo.png',
      audio: 'assets/audios/gallo.mp3'
    },
    {
      nombre: 'Gato',
      img: 'assets/img/gato.png',
      audio: 'assets/audios/gato.mp3'
    },
    {
      nombre: 'León',
      img: 'assets/img/leon.png',
      audio: 'assets/audios/leon.mp3'
    },
    {
      nombre: 'Mono',
      img: 'assets/img/mono.png',
      audio: 'assets/audios/mono.mp3'
    },
    {
      nombre: 'Oveja',
      img: 'assets/img/oveja.png',
      audio: 'assets/audios/oveja.mp3'
    },
    {
      nombre: 'Pájaro',
      img: 'assets/img/pajaro.png',
      audio: 'assets/audios/pajaro.mp3'
    },
    {
      nombre: 'Pato',
      img: 'assets/img/pato.png',
      audio: 'assets/audios/pato.mp3'
    },
    {
      nombre: 'Pavo',
      img: 'assets/img/pavo.png',
      audio: 'assets/audios/pavo.mp3'
    },
    {
      nombre: 'Perro',
      img: 'assets/img/perro.png',
      audio: 'assets/audios/perro.mp3'
    },
    {
      nombre: 'Rana',
      img: 'assets/img/rana.png',
      audio: 'assets/audios/rana.mp3'
    },
    {
      nombre: 'Vaca',
      img: 'assets/img/vaca.png',
      audio: 'assets/audios/vaca.mp3'
    },
  ];

  constructor() {}

  reproducir( animal ) {
    this.sonido.src = animal.audio;
    this.sonido.load();
    this.sonido.play();

  }
}
