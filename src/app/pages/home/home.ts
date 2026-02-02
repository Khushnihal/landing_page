import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  showSuccess = false;

  onSubmit() {
    // Later you can call API here

    this.showSuccess = true;

    // auto-close after 3 seconds (optional)
    // setTimeout(() => {
    //   this.showSuccess = false;
    // }, 3000);
  }

  closePopup() {
    this.showSuccess = false;
  }

  ngAfterViewInit(): void {
    // Listen for route changes and scroll to fragment section
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.route.fragment.subscribe((fragment) => {
        if (fragment) {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // Smooth scrolling for in-page anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e: Event) => {
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href && !['#', '#loginModal', '#registerModal'].includes(href)) {
          e.preventDefault();
          const target = document.querySelector(href);
          target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Update year in footer dynamically
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.footer p').forEach((p) => {
      p.innerHTML = p.innerHTML.replace('2025', currentYear.toString());
    });
  }

  goToItTraining() {
    this.router.navigate(['/it-training']);
  }
}
