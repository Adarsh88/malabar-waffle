import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSectionComponent } from '../../shared/components/hero/hero-section.component';
import { MenuGridComponent } from '../../shared/components/menu/menu-grid.component';
import { BestSellersComponent } from '../../shared/components/menu/best-sellers.component';
import { StorySectionComponent } from '../../shared/components/story/story-section.component';
import { OrderingSectionComponent } from '../../shared/components/ordering/ordering-section.component';
import { ErpShowcaseComponent } from '../../shared/components/erp/erp-showcase.component';
import { FranchiseSectionComponent } from '../../shared/components/franchise/franchise-section.component';
import { TestimonialsSectionComponent } from '../../shared/components/testimonials/testimonials-section.component';
import { ContactSectionComponent } from '../../shared/components/contact/contact-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    MenuGridComponent,
    BestSellersComponent,
    StorySectionComponent,
    OrderingSectionComponent,
    ErpShowcaseComponent,
    FranchiseSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  template: `
    <app-hero-section></app-hero-section>
    <app-menu-grid></app-menu-grid>
    <app-best-sellers></app-best-sellers>
    <app-story-section></app-story-section>
    <app-ordering-section></app-ordering-section>
    <app-erp-showcase></app-erp-showcase>
    <app-franchise-section></app-franchise-section>
    <app-testimonials-section></app-testimonials-section>
    <app-contact-section></app-contact-section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {}
