import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  ngOnInit(): void {
  }

}
