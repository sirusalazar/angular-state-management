import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <div class="stepper">
      <div class="controls">
        <button mat-flat-button color="primary">-</button>
        <div class="input-wrapper">
          <input type="number" min="0" value="0" />
          <label>Quantity</label>
        </div>
        <button mat-flat-button color="primary">+</button>
      </div>
    </div>
  `,
  styles: [
    `
      .stepper,
      .controls {
        display: flex;
        align-items: center;
      }

      .stepper {
        justify-content: center;
      }

      .controls {
        gap: 15px;
      }

      .input-wrapper {
        position: relative;
        height: 35px;
        border: 1px solid #757575;
        border-radius: 4px;
        padding: 0 5px;

        label {
          position: absolute;
          top: 0;
          max-width: 90%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          left: 15px;
          padding: 8px 5px 5px;
          pointer-events: none;
          transform-origin: 0 0;
          color: #757575;
          margin-bottom: 0;
          transform: translateY(-1rem) translateY(0.1rem) scale(0.8);
          z-index: 1;
          background: white;
        }

        input {
          border: none;
          height: 84%;
          margin-top: 2px;
          width: 70px;
          text-align: center;

          &:focus-visible {
            outline: none;
          }
        }
      }
    `,
  ],
})
export class StepperComponent {}
