import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { SectionHeadingComponent } from '../common/section-heading.component';

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [SectionHeadingComponent],
  template: `
    <section class="section alt">
      <div class="container">
        <app-section-heading eyebrow="Best sellers" title="Fast-moving favorites customers return for"></app-section-heading>
        <div class="review-row bestseller-row">
          @for (item of menuService.bestSellers(); track item.id) {
            <article class="card review bestseller-card">
              <strong>{{ item.name }}</strong>
              <span>Rating ★ {{ item.rating }} • Popularity 96%</span>
              <button class="btn btn-secondary" type="button">Quick Order</button>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BestSellersComponent {
  readonly menuService = inject(MenuService);
}
