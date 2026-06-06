import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartStore {
  readonly subtotal = signal(347);
  readonly discount = signal(35);
  readonly delivery = signal(30);
  readonly gst = signal(18);
  readonly grandTotal = computed(() => this.subtotal() - this.discount() + this.delivery() + this.gst());
}
