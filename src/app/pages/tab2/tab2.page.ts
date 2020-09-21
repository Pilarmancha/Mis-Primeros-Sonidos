import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  sonido = new Audio();

  slideOpts = {
    freeMode: false,
    spaceBetween: 0,
  };

  letras = [
    {
      img: 'assets/img/a.png',
      audio: 'assets/audios/a.mp3'
    },
    {
      img: 'assets/img/b.png',
      audio: 'assets/audios/b.mp3'
    },
    {
      img: 'assets/img/c.png',
      audio: 'assets/audios/c.mp3'
    },
    {
      img: 'assets/img/d.png',
      audio: 'assets/audios/d.mp3'
    },
    {
      img: 'assets/img/e.png',
      audio: 'assets/audios/e.mp3'
    },
    {
      img: 'assets/img/f.png',
      audio: 'assets/audios/f.mp3'
    },
    {
      img: 'assets/img/g.png',
      audio: 'assets/audios/g.mp3'
    },
    {
      img: 'assets/img/h.png',
      audio: 'assets/audios/h.mp3'
    },
    {
      img: 'assets/img/i.png',
      audio: 'assets/audios/i.mp3'
    },
    {
      img: 'assets/img/j.png',
      audio: 'assets/audios/j.mp3'
    },
    {
      img: 'assets/img/k.png',
      audio: 'assets/audios/k.mp3'
    },
    {
      img: 'assets/img/l.png',
      audio: 'assets/audios/l.mp3'
    },
    {
      img: 'assets/img/m.png',
      audio: 'assets/audios/m.mp3'
    },
    {
      img: 'assets/img/n.png',
      audio: 'assets/audios/n.mp3'
    },
    {
      img: 'assets/img/n1.png',
      audio: 'assets/audios/n1.mp3'
    },
    {
      img: 'assets/img/o.png',
      audio: 'assets/audios/o.mp3'
    },
    {
      img: 'assets/img/p.png',
      audio: 'assets/audios/p.mp3'
    },
    {
      img: 'assets/img/q.png',
      audio: 'assets/audios/q.mp3'
    },
    {
      img: 'assets/img/r.png',
      audio: 'assets/audios/r.mp3'
    },
    {
      img: 'assets/img/s.png',
      audio: 'assets/audios/s.mp3'
    },
    {
      img: 'assets/img/t.png',
      audio: 'assets/audios/t.mp3'
    },
    {
      img: 'assets/img/u.png',
      audio: 'assets/audios/u.mp3'
    },
    {
      img: 'assets/img/v.png',
      audio: 'assets/audios/v.mp3'
    },
    {
      img: 'assets/img/w.png',
      audio: 'assets/audios/w.mp3'
    },
    {
      img: 'assets/img/x.png',
      audio: 'assets/audios/x.mp3'
    },
    {
      img: 'assets/img/y.png',
      audio: 'assets/audios/y.mp3'
    },
    {
      img: 'assets/img/z.png',
      audio: 'assets/audios/z.mp3'
    }
  ];

  constructor() {}

  reproducir( letra ) {
    this.sonido.src = letra.audio;
    this.sonido.load();
    this.sonido.play();
  }

}
