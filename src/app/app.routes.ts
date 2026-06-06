import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', title: 'Malabar Waffle | Home', loadComponent: () => import('./features/home/home.page').then(m => m.HomePageComponent) },
  { path: 'menu', title: 'Malabar Waffle | Menu', loadComponent: () => import('./features/menu/menu.page').then(m => m.MenuPageComponent) },
  { path: 'our-story', title: 'Malabar Waffle | Our Story', loadComponent: () => import('./features/story/story.page').then(m => m.StoryPageComponent) },
  { path: 'locations', title: 'Malabar Waffle | Locations', loadComponent: () => import('./features/locations/locations.page').then(m => m.LocationsPageComponent) },
  { path: 'franchise', title: 'Malabar Waffle | Franchise', loadComponent: () => import('./features/franchise/franchise.page').then(m => m.FranchisePageComponent) },
  { path: 'erp', title: 'Malabar Waffle | ERP Dashboard', loadComponent: () => import('./features/erp/erp.page').then(m => m.ErpPageComponent) },
  { path: 'contact', title: 'Malabar Waffle | Contact', loadComponent: () => import('./features/contact/contact.page').then(m => m.ContactPageComponent) },
  { path: '**', redirectTo: '' }
];
