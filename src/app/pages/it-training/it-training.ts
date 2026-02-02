import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-it-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './it-training.html',
  styleUrls: ['./it-training.css'],
})
export class ItTraining implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  testimonials = [
    {
      photo: '/images/Khushnihal_T.jpg',
    },
    {
      photo: '/images/Vaishnavi_T.jpg',
    },
    {
      photo: '/images/Tejaswini_T.jpg',
    },
    {
      photo: '/images/Vaibhav.K_T.jpg',
    },
    {
      photo: '/images/Bhagyashree_T.jpg',
    },
    {
      photo: '/images/Vaibhav_T.jpg',
    },
    {
      photo: '/images/Rakhi_T.jpg',
    },
  ];

  sliderIndex = 0;

  get visibleTestimonials() {
    const l = this.testimonials.length;
    const prev = (this.sliderIndex - 1 + l) % l;
    const next = (this.sliderIndex + 1) % l;
    return [this.testimonials[prev], this.testimonials[this.sliderIndex], this.testimonials[next]];
  }
  prevSlide() {
    this.sliderIndex = (this.sliderIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
  nextSlide() {
    this.sliderIndex = (this.sliderIndex + 1) % this.testimonials.length;
  }

  constructor() {}
}
