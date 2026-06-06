import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TestimonialsSectionComponent } from '../../shared/components/testimonials/testimonials-section.component';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [TestimonialsSectionComponent],
  template: `<app-testimonials-section></app-testimonials-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsPageComponent {}
