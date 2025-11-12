import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Scroll } from './services/scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements OnInit {
  protected readonly title = signal('Landing_Page_B');

  constructor(private router: Router, private scroll: Scroll) {}

  ngOnInit(): void {
    // Initialize AOS animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Listen for router navigation end events to handle fragment scrolling
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        const element = document.getElementById(tree.fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Scroll to top when no fragment
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
