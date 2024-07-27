import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { createCustomElement } from '@angular/elements';
import { FormService } from './components/form/form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FormService],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'adote-um-gato';

  constructor(injector: Injector) {
    const FormElement = createCustomElement(FormComponent, {
      injector,
    });
    customElements.define('form-element', FormElement);
  }
}
