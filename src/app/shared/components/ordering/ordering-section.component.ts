import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartSummaryComponent } from './cart-summary.component';
import { CheckoutFormComponent } from './checkout-form.component';

@Component({
  selector: 'app-ordering-section',
  standalone: true,
  imports: [CartSummaryComponent, CheckoutFormComponent],
  template: `
    <section class="section" id="order">
      <div class="container split-dashboard">
        <app-cart-summary></app-cart-summary>
        <app-checkout-form></app-checkout-form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderingSectionComponent {}
