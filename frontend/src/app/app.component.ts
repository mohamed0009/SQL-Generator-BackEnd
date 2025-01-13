import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SqlFormComponent } from './sql-form/sql-form.component';
import { fadeIn, fadeInUp } from './animations/shared-animations';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, SqlFormComponent],
  animations: [fadeIn, fadeInUp],
  template: `
    <div class="app-container sql-syntax" @fadeIn>
      <app-header></app-header>
      <main @fadeInUp class="sql-card">
        <app-sql-form></app-sql-form>
      </main>
      <app-footer></app-footer>
      <div class="app-decoration primary"></div>
      <div class="app-decoration secondary"></div>
      <div class="app-pattern"></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: 'Fira Code', monospace;
        min-height: 100vh;
        position: relative;
        overflow-x: hidden;
        background: #1e1e1e;
      }

      .app-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        color: var(--sql-foreground);
        transition: background-color 0.3s ease, color 0.3s ease;
        position: relative;
        z-index: 1;
      }

      main {
        flex: 1;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
          padding: 1rem;
        }
      }

      .app-decoration {
        position: fixed;
        pointer-events: none;
        z-index: 0;

        &.primary {
          top: -50%;
          left: -25%;
          right: -25%;
          bottom: -50%;
          background: radial-gradient(
            circle at center,
            rgba(78, 201, 176, 0.03) 0%,
            rgba(86, 156, 214, 0.03) 50%,
            transparent 70%
          );
          transform: rotate(-12deg);
        }

        &.secondary {
          top: -50%;
          left: 25%;
          right: -75%;
          bottom: -50%;
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.02) 0%,
            rgba(78, 201, 176, 0.02) 50%,
            transparent 70%
          );
          transform: rotate(15deg);
        }
      }

      .app-pattern {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.02;
        background-size: 50px 50px;
        background-image: linear-gradient(
            to right,
            #4ec9b0 1px,
            transparent 1px
          ),
          linear-gradient(to bottom, #569cd6 1px, transparent 1px);
        z-index: 0;
        pointer-events: none;
      }

      ::ng-deep {
        .sql-card {
          background: rgba(30, 30, 30, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(78, 201, 176, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      }
    `,
  ],
})
export class AppComponent {
  constructor() {}
}
