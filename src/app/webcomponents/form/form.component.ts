import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ContentChildren,
  QueryList,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgIf, CustomInputComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    label: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}
  @Output() formSubmitted = new EventEmitter<void>();

  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() catName!: string;

  @ContentChildren(CustomInputComponent)
  customInputs!: QueryList<CustomInputComponent>;

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pet: ['', Validators.required],
      mensagem: ['', Validators.required],
    });
  }

  onSubmit() {
    this.formSubmitted.emit();
  }
}
