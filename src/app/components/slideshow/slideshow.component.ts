import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  public mySwiper: Swiper;
  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  ngOnInit(): void {
  }

}
