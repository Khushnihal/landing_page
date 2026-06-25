import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.html',
  styleUrl: './about-us.css'
})
export class AboutUs {
  metrics = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '300+', label: 'Professionals Trained' },
    { value: '87%', label: 'Client Retention' },
    { value: '24/7', label: 'Support & Operations' }
  ];

  values = [
    {
      icon: 'bi-lightbulb',
      title: 'Innovation First',
      desc: 'We continuously push boundaries to build modern, future-proof digital assets for our clients.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Absolute Integrity',
      desc: 'Uncompromising compliance, data safety and transparency in all business engagements.'
    },
    {
      icon: 'bi-award',
      title: 'Excellence in Execution',
      desc: 'From in-house platforms to enterprise consulting, we engineer for reliability and scale.'
    }
  ];
}