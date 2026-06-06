import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TESTIMONIALS } from '../../data/brand.data';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  template: `
    <section class="section alt" id="locations">
      <div class="container testimonials-locations">
        <div>
          <p class="eyebrow">Testimonials</p>
          <div class="review-row">
            @for (testimonial of testimonials; track testimonial.author) {
              <article class="card review"><strong>“{{ testimonial.quote }}”</strong><span>— {{ testimonial.author }}, {{ testimonial.location }}</span></article>
            }
          </div>
        </div>
        <div class="card contact-card">
          <p class="eyebrow">Locations & contact</p>
          <h2>Branches, hours, and direct ordering</h2>
          <p>Kozhikode • Palakkad • Malappuram</p>
          <p>Opening Hours: 11:00 AM – 11:00 PM</p>
          <p>WhatsApp: +91 9XXXXXX999</p>
          <div class="map-box">Google Maps Embed Area</div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsSectionComponent {
  readonly testimonials = TESTIMONIALS;
}
