import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {
  pauseOnHover = true;
  pauseOnFocus = true;
  
  showNavigationArrows = false;
  showNavigationIndicators = false;

  images = [1, 2, 3].map((n) => `assets/landing-page-${n}.jpg`);

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
