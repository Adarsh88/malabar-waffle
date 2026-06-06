import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartStore } from '../../../core/store/cart.store';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  template: `
    <div class="card cart-card">
      <p class="eyebrow">Online ordering</p>
      <h2>Seamless cart and checkout</h2>
      <ul class="cart-list">
        <li><span>Choco Fantasy × 2</span><strong>₹238</strong></li>
        <li><span>Double Chocolate × 1</span><strong>₹109</strong></li>
        <li><span>Coupon: MALABAR10</span><strong>-₹{{ cart.discount() }}</strong></li>
        <li><span>Delivery</span><strong>₹{{ cart.delivery() }}</strong></li>
        <li><span>GST</span><strong>₹{{ cart.gst() }}</strong></li>
      </ul>
      <div class="total-row"><span>Grand Total</span><strong>₹{{ cart.grandTotal() }}</strong></div>
      <div class="payment-chips"><span>UPI</span><span>Google Pay</span><span>PhonePe</span><span>Credit Card</span><span>Debit Card</span><span>Cash on Delivery</span></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSummaryComponent {
  readonly cart = inject(CartStore);
}
