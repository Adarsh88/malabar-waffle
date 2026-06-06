import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form class="card checkout-form" [formGroup]="form">
      <h3>Checkout</h3>
      <div class="form-grid">
        <label><span>Name</span><input formControlName="name" type="text" placeholder="Your name"></label>
        <label><span>Mobile Number</span><input formControlName="mobile" type="tel" placeholder="Phone number"></label>
        <label><span>Email</span><input formControlName="email" type="email" placeholder="Email"></label>
        <label><span>Address</span><input formControlName="address" type="text" placeholder="Full address"></label>
        <label><span>Landmark</span><input formControlName="landmark" type="text" placeholder="Nearby landmark"></label>
        <label><span>City</span><input formControlName="city" type="text" placeholder="City"></label>
        <label><span>Pincode</span><input formControlName="pincode" type="text" placeholder="Pincode"></label>
      </div>
      <button class="btn btn-primary wide" type="button">Place Order</button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutFormComponent {
  readonly form = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    landmark: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
  });
}
