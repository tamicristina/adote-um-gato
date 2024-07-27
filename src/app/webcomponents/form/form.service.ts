import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';

@Injectable()
export class FormService {
  constructor() {}

  showAsElement(title: string) {
    const formEl: NgElement & WithProperties<FormComponent> =
      document.createElement('form-element') as any;

    formEl.title = title;

    document.body.appendChild(formEl);
  }
}
