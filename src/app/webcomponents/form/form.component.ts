import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  @Input() title!: string;
  @Input() buttonLabel!: string;
  @Input() catName!: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formSubmitted.emit();
    }
  }
}
