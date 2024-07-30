import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './webcomponents/form/form.component';
import { createCustomElement } from '@angular/elements';
import { FormService } from './webcomponents/form/form.service';
import { NGXLogger } from 'ngx-logger';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomInputComponent } from './webcomponents/form/components/custom-input/custom-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [FormService],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'adote-um-gato';

  constructor(private injector: Injector, private logger: NGXLogger) {
    this.logger.debug('AppComponent inicializado');
    this.registerFormComponent();
    this.registerInputComponent();

    this.logger.info('AppComponent carregado com sucesso');
    this.logger.trace('A aplicação iniciou com título: ' + this.title);
    this.logger.log('Execução do construtor do AppComponent');
  }

  private registerFormComponent() {
    try {
      if (!customElements.get('form-element')) {
        const FormElement = createCustomElement(FormComponent, {
          injector: this.injector,
        });
        customElements.define('form-element', FormElement);
        this.logger.debug('FormComponent registrado como web component');
      }

      this.logger.debug(
        'O elemento customizado "form-element" já estava registrado'
      );
    } catch (error) {
      this.logger.error('Erro ao tentar registrar o FormComponent', error);
    }
  }
  private registerInputComponent() {
    try {
      if (!customElements.get('input-element')) {
        const InputElement = createCustomElement(CustomInputComponent, {
          injector: this.injector,
        });
        customElements.define('input-element', InputElement);
        this.logger.debug('InputComponent registrado como web component');
      }

      this.logger.debug(
        'O elemento customizado "form-element" já estava registrado'
      );
    } catch (error) {
      this.logger.error('Erro ao tentar registrar o InputComponent', error);
    }
  }
}
