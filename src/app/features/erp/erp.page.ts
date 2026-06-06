import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErpShowcaseComponent } from '../../shared/components/erp/erp-showcase.component';

@Component({
  selector: 'app-erp-page',
  standalone: true,
  imports: [ErpShowcaseComponent],
  template: `<app-erp-showcase></app-erp-showcase>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErpPageComponent {}
