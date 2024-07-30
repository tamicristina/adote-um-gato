import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { CustomInputComponent } from './custom-input.component';

@Injectable()
export class InputService {
  constructor() {}

  showAsElement(
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
    // inputEl.value = value;
    inputEl.formControlName = formControlName;

    document.body.appendChild(inputEl);
  }
}
