import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CustomInputComponent } from './custom-input.component';

@Injectable()
export class InputService {
  constructor() {}

  // Cria e adiciona um elemento de formulário ao DOM.
  showAsElement(
    label: string,
    type: string,
    isTextarea: boolean,
    value: string | null,
    formControlName: string
  ) {
    // Cria o elemento personalizado 'form-element'
    const inputEl: NgElement & WithProperties<CustomInputComponent> =
      document.createElement('input-element') as any;

    // Define as propriedades do elemento
    inputEl.label = label;
    inputEl.type = type;
    inputEl.isTextarea = isTextarea;
    inputEl.value = value;
    inputEl.formControlName = formControlName;

    // Adiciona o elemento ao DOM
    document.body.appendChild(inputEl);
  }
}
