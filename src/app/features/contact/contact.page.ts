import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactSectionComponent } from '../../shared/components/contact/contact-section.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactSectionComponent],
  template: `<app-contact-section></app-contact-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent {}
