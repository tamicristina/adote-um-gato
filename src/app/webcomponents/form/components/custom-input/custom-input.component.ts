import { NgIf } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
  ControlValueAccessor,
} from '@angular/forms'; //permite que o input personalizado funcione com os formulários angular

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  //permite que o input personalizado funcione com os formulários angular
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  // Inputs recebidos pelo componente
  @Input() label!: string;
  @Input() type!: string;
  @Input() isTextarea?: boolean;
  @Input() value!: string | null;
  @Input() formControlName!: string;

  control: FormControl = new FormControl('', Validators.required);

  ngOnInit() {
    this.control.setValue(this.value);
  }

  //Atualiza o valor do componente quando o valor do controle do formulário muda.
  writeValue(value: any): void {
    if (this.control) {
      this.control.setValue(value, { emitEvent: false });
      this.value = value;
    }
  }

  //Registra uma função que é chamada quando o valor do componente muda.
  registerOnChange(fn: any): void {
    if (this.control) {
      this.control.valueChanges.subscribe(fn);
    }
  }

  onTouched: () => void = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  //Define se o componente deve estar desativado ou não.
  setDisabledState?(isDisabled: boolean): void {
    this.control[isDisabled ? 'disable' : 'enable']();
  }
}
