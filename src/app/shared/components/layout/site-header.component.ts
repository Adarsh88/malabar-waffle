import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { NAV_LINKS } from "../../data/brand.data";

@Component({
  selector: "app-site-header",
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="site-header glass">
      <div class="container nav-wrap">
        <a class="brand" routerLink="/" aria-label="Malabar Waffle home">
          <img
            src="assets/logo/malabar_waffle_logo.png"
            alt="Malabar Waffle logo"
            width="202"
            height="102"
          />
        </a>

        <button
          class="nav-toggle"
          type="button"
          [attr.aria-expanded]="menuOpen()"
          (click)="toggleMenu()"
        >
          ☰
        </button>

        <nav aria-label="Primary navigation" class="primary-nav">
          <ul class="nav-links" [class.open]="menuOpen()">
            @for (link of links; track link.label) {
              <li>
                <a [routerLink]="link.route">{{ link.label }}</a>
              </li>
            }
          </ul>
        </nav>

        <div class="nav-actions">
          <button
            class="theme-toggle"
            type="button"
            [attr.aria-label]="themeLabel()"
            (click)="toggleTheme()"
          >
            ◐
          </button>
          <a class="btn btn-primary" routerLink="/menu">Order Now</a>
        </div>
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly links = NAV_LINKS;
  readonly menuOpen = signal(false);
  readonly isDark = signal(false);
  readonly themeLabel = computed(() =>
    this.isDark() ? "Switch to light mode" : "Switch to dark mode",
  );

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  toggleTheme() {
    this.isDark.update((v) => !v);
    document.documentElement.setAttribute(
      "data-theme",
      this.isDark() ? "dark" : "light",
    );
  }
}
