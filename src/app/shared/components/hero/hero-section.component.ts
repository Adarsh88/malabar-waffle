import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO_HIGHLIGHTS } from '../../data/brand.data';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero section" id="home">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow badge">Warm tropical premium café</p>
          <h1>Taste the Soul of Malabar in Every Waffle</h1>
          <p class="hero-copy">Premium handcrafted waffles inspired by the flavors and warmth of Kerala, delivered through a modern dessert and ERP-enabled ordering experience.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" routerLink="/menu">Explore Menu</a>
            <a class="btn btn-secondary" routerLink="/contact">Order Online</a>
          </div>
          <div class="floating-facts">
            @for (item of highlights; track item.title) {
              <article class="fact-card"><strong>{{ item.title }}</strong><span>{{ item.description }}</span></article>
            }
          </div>
        </div>
        <div class="hero-visual card tropical-panel" aria-hidden="true">
          <div class="sun"></div>
          <div class="palm palm-left"></div>
          <div class="palm palm-right"></div>
          <div class="house"></div>
          <div class="waffle-stack"><div class="waffle top"></div><div class="waffle cream"></div><div class="waffle base"></div></div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  readonly highlights = HERO_HIGHLIGHTS;
}
