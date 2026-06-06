import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>Malabar Waffle</h3>
          <p>Premium handcrafted waffles inspired by Kerala warmth and powered by modern operations.</p>
        </div>
        <div><h4>Quick Links</h4><a routerLink="/menu">Menu</a><a routerLink="/our-story">Our Story</a><a routerLink="/erp">ERP Solutions</a></div>
        <div><h4>Franchise</h4><a routerLink="/franchise">Apply</a><a routerLink="/locations">Locations</a><a routerLink="/contact">Contact</a></div>
        <div>
          <h4>Newsletter</h4>
          <label class="newsletter"><input type="email" placeholder="Your email"><button class="btn btn-primary" type="button">Subscribe</button></label>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteFooterComponent {}
