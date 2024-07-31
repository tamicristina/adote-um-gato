import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';

@Injectable()
export class FormService {
  constructor() {}

  // Cria e adiciona um elemento de formulário ao DOM.
  showAsElement(title: string, buttonLabel: string) {
    // Cria o elemento personalizado 'form-element'
    const formEl: NgElement & WithProperties<FormComponent> =
      document.createElement('form-element') as any;

    // Define as propriedades do elemento
    formEl.title = title;
    formEl.buttonLabel = buttonLabel;

    // Adiciona o elemento ao DOM
    document.body.appendChild(formEl);
  }
}
