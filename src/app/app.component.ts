import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './webcomponents/form/form.component';
import { createCustomElement } from '@angular/elements';
import { FormService } from './webcomponents/form/form.service';
import { NGXLogger } from 'ngx-logger';

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

  constructor(injector: Injector, private logger: NGXLogger) {
    if (!customElements.get('form-element')) {
      const FormElement = createCustomElement(FormComponent, { injector });
      customElements.define('form-element', FormElement);
    }
    this.logger.error('Erro ao inicializar o AppComponent', Error);
    this.logger.debug('AppComponent initialized');
    this.logger.trace('Tracing is colored blue');
    this.logger.info('Info helps the UX');
    this.logger.log('Your log message goes here');
    this.logger.warn('Warnings are highlighted');
  }
}
