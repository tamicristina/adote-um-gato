import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() catName!: string;

  @ViewChild('f') form!: NgForm;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmitted.emit();
    }
  }
}
