import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { MenuItem } from '../../../core/models/menu.model';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  template: `
    <article class="menu-card" [class.vanilla]="item().category === 'vanilla'" [class.chocolate]="item().category === 'chocolate'" [class.velvet]="item().category === 'red-velvet'">
      <span class="ribbon">{{ ribbon() }}</span>
      <h3>{{ item().name }}</h3>
      <p>Premium finish • ★ {{ item().rating }}</p>
      <div class="price-row">
        <span>₹{{ item().price }}</span>
        <div class="qty">
          <button type="button" (click)="decrement()">-</button>
          <span>{{ quantity() }}</span>
          <button type="button" (click)="increment()">+</button>
        </div>
      </div>
      <button class="btn btn-primary wide" type="button" (click)="add.emit({ item: item(), quantity: quantity() })">Add to Cart</button>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuCardComponent {
  readonly item = input.required<MenuItem>();
  readonly add = output<{ item: MenuItem; quantity: number }>();
  readonly quantity = signal(1);
  readonly ribbon = computed(() => {
    const category = this.item().category;
    if (category === 'vanilla') return 'Vanilla Collection';
    if (category === 'chocolate') return 'Chocolate Collection';
    return 'Red Velvet Collection';
  });

  increment() { this.quantity.update(value => value + 1); }
  decrement() { this.quantity.update(value => Math.max(1, value - 1)); }
}
