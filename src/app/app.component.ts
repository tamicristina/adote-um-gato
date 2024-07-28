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
    this.logger.debug('AppComponent inicializado');
    try {
      if (!customElements.get('form-element')) {
        const FormElement = createCustomElement(FormComponent, { injector });
        customElements.define('form-element', FormElement);
        this.logger.debug('FormComponent registrado como web component');
      }

      this.logger.debug(
        'O elemento customizado "form-element" já estava registrado'
      );
    } catch (error) {
      this.logger.error('Erro ao tentar registrar o FormComponent', error);
    }

    this.logger.info('AppComponent carregado com sucesso');
    this.logger.trace('A aplicação iniciou com título: ' + this.title);
    this.logger.log('Execução do construtor do AppComponent');
  }
}
