import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@Injectable()
export class FormService {
  constructor() {}

  showInputAsElement(
    label: string,
    type: string,
    isTextarea: boolean,
    value: string | null,
    formControlName: string
  ) {
    const inputEl: NgElement & WithProperties<CustomInputComponent> =
      document.createElement('input-element') as any;

    inputEl.label = label;
    inputEl.type = type;
    inputEl.isTextarea = isTextarea;
    inputEl.value = value;
    inputEl.formControlName = formControlName;

    document.body.appendChild(inputEl);
  }

  showAsElement(title: string, buttonLabel: string) {
    const formEl: NgElement & WithProperties<FormComponent> =
      document.createElement('form-element') as any;

    formEl.title = title;
    formEl.buttonLabel = buttonLabel;

    document.body.appendChild(formEl);
  }
}
