import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FranchiseSectionComponent } from '../../shared/components/franchise/franchise-section.component';

@Component({
  selector: 'app-franchise-page',
  standalone: true,
  imports: [FranchiseSectionComponent],
  template: `<app-franchise-section></app-franchise-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FranchisePageComponent {}
