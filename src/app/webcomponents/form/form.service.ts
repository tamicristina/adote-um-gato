import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';

@Injectable()
export class FormService {
  constructor() {}

  showAsElement(title: string, buttonLabel: string) {
    const formEl: NgElement & WithProperties<FormComponent> =
      document.createElement('form-element') as any;

    formEl.title = title;
    formEl.buttonLabel = buttonLabel;

    document.body.appendChild(formEl);
  }
}
