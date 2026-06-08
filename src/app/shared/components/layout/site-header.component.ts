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
          />
        </a>

        <button
          class="nav-toggle"
          type="button"
          [attr.aria-expanded]="menuOpen()"
          (click)="toggleMenu()"
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav class="primary-nav" aria-label="Primary navigation">
          <ul class="nav-links" [class.open]="menuOpen()">
            @for (link of links; track link.label) {
              <li>
                <a [routerLink]="link.route" (click)="menuOpen.set(false)">
                  {{ link.label }}
                </a>
              </li>
            }

            <li class="mobile-actions">
              <a class="btn btn-primary" routerLink="/menu">
                <div class="button-text">Order Now</div>
              </a>
            </li>
          </ul>
        </nav>

        <div class="nav-actions">
          <a class="btn btn-primary" routerLink="/menu"> Order Now </a>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .site-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
      }

      .nav-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: clamp(0.75rem, 2vw, 2rem);
        min-height: clamp(4rem, 6vw, 5.5rem);
      }

      .brand img {
        width: clamp(8rem, 14vw, 12rem);
        height: auto;
        display: block;
      }

      .primary-nav {
        flex: 1;
      }

      .nav-links {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: clamp(1rem, 2vw, 2rem);

        list-style: none;
        margin: 0;
        padding: 0;

        a {
          text-decoration: none;
          white-space: nowrap;
        }
      }

      .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .mobile-actions {
        display: none;
      }

      .nav-toggle {
        display: none;
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: clamp(1.25rem, 2vw, 1.75rem);
      }

      @media (max-width: 992px) {
        .nav-toggle {
          display: block;
        }

        .nav-actions {
          display: none;
        }

        .primary-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
        }

        .btn.btn-primary {
          padding: 0.75rem 1.5rem;
        }

        .nav-links {
          position: absolute;
          top: 0;
          left: 0;

          width: 100%;
          display: none;
          flex-direction: column;
          align-items: stretch;

          padding: 1.5rem;
          gap: 1rem;

          background: var(--surface-color, #fff);
          border-top: 1px solid rgba(0, 0, 0, 0.08);

          li {
            width: 100%;
          }

          a {
            display: block;
            width: 100%;
            padding: 0.75rem 0;
          }

          &.open {
            display: flex;
          }
        }

        .mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          padding-top: 1rem;
        }
      }

      @media (max-width: 576px) {
        .brand img {
          width: clamp(7rem, 35vw, 9rem);
        }

        .nav-wrap {
          min-height: 4rem;
        }

        .btn.btn-primary {
          padding: 0.75rem 1.5rem;
        }

        .button-text {
          padding: 0.75rem 1.5rem;
        }
      }
    `,
  ],
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
