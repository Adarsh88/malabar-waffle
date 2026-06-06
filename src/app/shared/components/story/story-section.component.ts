import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-story-section',
  standalone: true,
  template: `
    <section class="section alt" id="story">
      <div class="container two-col">
        <div>
          <p class="eyebrow">Our story</p>
          <h2>Where Malabar heritage meets premium dessert culture</h2>
          <div class="timeline">
            <article><span>01</span><div><h3>Rooted in Kerala</h3><p>Inspired by tiled roofs, coconut groves, and the hospitality of Malabar.</p></div></article>
            <article><span>02</span><div><h3>Premium ingredients</h3><p>Fresh creams, rich syrups, waffle textures, and warm plating shape every order.</p></div></article>
            <article><span>03</span><div><h3>Prepared fresh</h3><p>Fast preparation and consistent presentation keep the brand memorable.</p></div></article>
          </div>
        </div>
        <div class="motif-card card"><div class="motif-arch"></div><div class="motif-palms"></div><div class="motif-grid"></div></div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StorySectionComponent {}
