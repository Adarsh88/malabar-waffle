import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuGridComponent } from '../../shared/components/menu/menu-grid.component';
import { BestSellersComponent } from '../../shared/components/menu/best-sellers.component';

@Component({
  selector: 'app-menu-page',
  standalone: true,
  imports: [MenuGridComponent, BestSellersComponent],
  template: `<app-menu-grid></app-menu-grid><app-best-sellers></app-best-sellers>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPageComponent {}
