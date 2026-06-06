import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from './shared/components/layout/site-header.component';
import { SiteFooterComponent } from './shared/components/layout/site-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="page-shell">
      <app-site-header></app-site-header>
      <main id="main-content" class="router-shell">
        <router-outlet></router-outlet>
      </main>
      <app-site-footer></app-site-footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
