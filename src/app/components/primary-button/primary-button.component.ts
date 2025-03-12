import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button class="bg-blue-500 hover:opacity-90 text-white font-bold py-2 px-5 rounded-xl shadow-md" (click) ="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');
  btnClicked = output();

  handleButtonClick() {
    console.log('Button clicked');
  }
}
