import { NgIf } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() isTextarea: boolean = false;
  @Input() value: string | null = null;
  @Input() formControlName: string = '';

  control: FormControl = new FormControl('', Validators.required);

  ngOnInit() {
    this.control.setValue(this.value);
  }

  writeValue(value: any): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.subscribe(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    this.control[isDisabled ? 'disable' : 'enable']();
  }
}
