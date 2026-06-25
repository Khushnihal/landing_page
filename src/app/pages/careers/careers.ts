import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  templateUrl: './careers.html',
  styleUrl: './careers.css'
})
export class Careers {
  // You can edit these openings anytime
  openings = [
    {
      title: 'Full Stack Web Developer',
      type: 'Full-time',
      location: 'Nagpur, India',
      level: '6 Month - 1 Year',
      tags: ['.Net Core', 'REST APIs', 'React js', 'SQL Server'],
      highlight: 'Build scalable web applications using modern technologies.'
    },
    {
      title: 'React Developer Intern',
      type: 'Full-time',
      location: 'Nagpur, India',
      level: '6 Month - 1 Year',
      tags: ['React js', 'JavaScript', 'HTML', 'CSS'],
      highlight: 'Work on real-world projects and learn from Experienced Developers.'
    },
    {
      title: 'Full Stack Intern',
      type: 'Part-time / Contract',
      location: 'Nagpur, India',
      level: 'Freshers',
      tags: ['JavaScript', 'HTML', 'CSS', 'SQL', 'C#'],
      highlight: 'Help build analytics pipelines and dashboards powering decision-making.'
    }
  ];
}