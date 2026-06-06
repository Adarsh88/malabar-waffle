import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StorySectionComponent } from '../../shared/components/story/story-section.component';

@Component({
  selector: 'app-story-page',
  standalone: true,
  imports: [StorySectionComponent],
  template: `<app-story-section></app-story-section>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryPageComponent {}
