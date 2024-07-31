import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ContentChildren,
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
  // Emite um evento quando o formulário é enviado
  @Output() formSubmitted = new EventEmitter<void>();
  // Propriedades recebidas do componente pai
  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() catBreedName!: string;
  @ContentChildren(CustomInputComponent) // Consulta todos os CustomInputComponent filhos
  ariaLabel: string = this.buttonLabel;

  ngOnInit() {
    // Inicializa o FormGroup com os controles necessários e validações
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        pet: ['', Validators.required],
        message: ['', Validators.required],
      },
      { validators: Validators.compose([Validators.required]) }
    );
    if (this.catBreedName) {
      this.form.patchValue({ pet: this.catBreedName });
    }
  }

  onSubmit() {
    this.formSubmitted.emit();
  }
}
