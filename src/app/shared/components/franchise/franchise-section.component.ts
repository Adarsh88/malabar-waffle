import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { FRANCHISE_BENEFITS } from '../../data/brand.data';

@Component({
  selector: 'app-franchise-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="section" id="franchise">
      <div class="container two-col">
        <div>
          <p class="eyebrow">Franchise</p>
          <h2>Bring Malabar Waffle to Your City</h2>
          <ul class="feature-list">
            @for (benefit of benefits; track benefit.title) {
              <li><strong>{{ benefit.title }}</strong> — {{ benefit.description }}</li>
            }
          </ul>
        </div>
        <form class="card franchise-form" [formGroup]="form">
          <h3>Application Form</h3>
          <label><span>Full Name</span><input formControlName="name" type="text" placeholder="Applicant name"></label>
          <label><span>City</span><input formControlName="city" type="text" placeholder="Preferred city"></label>
          <label><span>Investment Range</span><input formControlName="investment" type="text" placeholder="Budget"></label>
          <label><span>Phone</span><input formControlName="phone" type="tel" placeholder="Phone number"></label>
          <button class="btn btn-primary wide" type="button">Apply Now</button>
        </form>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FranchiseSectionComponent {
  readonly benefits = FRANCHISE_BENEFITS;
  readonly form = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    investment: new FormControl(''),
    phone: new FormControl('')
  });
}
