import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="section" id="contact">
      <div class="container two-col">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Start a conversation with Malabar Waffle</h2>
          <p class="hero-copy">Ask about bulk orders, delivery support, franchising, or ERP-enabled operations for your branch.</p>
          <div class="payment-chips"><span>WhatsApp CTA</span><span>Google Maps</span><span>Opening Hours</span></div>
        </div>
        <form class="card checkout-form" [formGroup]="form">
          <h3>Contact Form</h3>
          <div class="form-grid">
            <label><span>Name</span><input formControlName="name" type="text" placeholder="Your name"></label>
            <label><span>Phone</span><input formControlName="phone" type="tel" placeholder="Your phone"></label>
            <label><span>Email</span><input formControlName="email" type="email" placeholder="Your email"></label>
            <label><span>Message</span><input formControlName="message" type="text" placeholder="How can we help?"></label>
          </div>
          <button class="btn btn-primary wide" type="button">Send Message</button>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent {
  readonly form = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });
}
