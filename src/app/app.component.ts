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
    // Log para indicar que o AppComponent foi inicializado
    this.logger.debug('AppComponent inicializado');
    // Registra os custom elements
    this.registerFormComponent();
    this.registerInputComponent();
    // Log para indicar que o AppComponent foi carregado com sucesso
    this.logger.info('AppComponent carregado com sucesso');

    // Log para rastrear o título da aplicação
    this.logger.trace('A aplicação iniciou com título: ' + this.title);

    // Log para indicar a execução do construtor do AppComponent
    this.logger.log('Execução do construtor do AppComponent');
  }

  //Converte `FormComponent` em um custom element.
  private registerFormComponent() {
    try {
      // Verifica se o elemento customizado 'form-element' já está registrado.
      if (!customElements.get('form-element')) {
        const FormElement = createCustomElement(FormComponent, {
          injector: this.injector,
        });
        customElements.define('form-element', FormElement);

        // Log para indicar que o FormComponent foi registrado como web component
        this.logger.debug('FormComponent registrado como web component');
      }

      this.logger.debug(
        // Log para indicar que o elemento customizado 'form-element' já estava registrado
        'O elemento customizado "form-element" já estava registrado'
      );
    } catch (error) {
      // Log para capturar e relatar erros ao tentar registrar o FormComponent
      this.logger.error('Erro ao tentar registrar o FormComponent', error);
    }
  }

  //Converte `CustomInputComponent` em um custom element.
  private registerInputComponent() {
    try {
      // Verifica se o elemento customizado 'form-element' já está registrado.
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
