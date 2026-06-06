import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MenuService } from '../../../core/services/menu.service';
import { SectionHeadingComponent } from '../common/section-heading.component';
import { MenuCardComponent } from './menu-card.component';

@Component({
  selector: 'app-menu-grid',
  standalone: true,
  imports: [SectionHeadingComponent, MenuCardComponent],
  template: `
    <section class="section" id="menu">
      <div class="container">
        <app-section-heading eyebrow="Signature menu" title="Collections crafted like a premium café menu"></app-section-heading>
        <div class="menu-grid">
          @for (item of menuService.allItems(); track item.id) {
            <app-menu-card [item]="item" (add)="onAdd($event)"></app-menu-card>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuGridComponent {
  readonly menuService = inject(MenuService);
  onAdd(event: { item: { name: string }; quantity: number }) {
    console.log('Added to cart', event.item.name, event.quantity);
  }
}
