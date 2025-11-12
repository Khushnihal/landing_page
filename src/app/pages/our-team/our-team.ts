import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.html',
  styleUrls: ['./our-team.css'],
})
export class OurTeam implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  employees = [
    {
      name: 'Akash Wankhade',
      position: 'BDM',
      photo: '/images/Akash.jpg',
    },
    {
      name: 'Mohd Khushnihal Ansari',
      position: 'Software Developer',
      photo: '/images/Khushnihal.jpg',
    },

    {
      name: 'Divya',
      position: 'HR Executive',
      photo: '/images/Divya.jpg',
    },
    {
      name: 'Gaurav Khanorkar',
      position: 'Admin/HR',
      photo: '/images/Gaorav.jpg',
    },
    {
      name: 'Tejas Telange',
      position: 'Sales Executive',
      photo: '/images/Tejas.jpg',
    },
  ];

  sliderIndex = 0;

  get visibleEmployees() {
    const l = this.employees.length;
    const prev = (this.sliderIndex - 1 + l) % l;
    const next = (this.sliderIndex + 1) % l;
    return [this.employees[prev], this.employees[this.sliderIndex], this.employees[next]];
  }
  prevSlide() {
    this.sliderIndex = (this.sliderIndex - 1 + this.employees.length) % this.employees.length;
  }
  nextSlide() {
    this.sliderIndex = (this.sliderIndex + 1) % this.employees.length;
  }

  constructor() {}
}
