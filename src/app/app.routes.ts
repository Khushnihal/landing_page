import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ItTraining } from './pages/it-training/it-training';
import { OurTeam } from './pages/our-team/our-team';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', component: Home },
  // { path: 'services', component: Home },
  // { path: 'products', component: Home },
  // { path: 'features', component: Home },
  // { path: 'contact', component: Home },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'it-training', component: ItTraining },
  { path: 'our-team', component: OurTeam },
  { path: '**', redirectTo: '' },
];
