import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [NgIf, FormComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.scss',
})
export class AdoptionComponent {
  message = '';

  constructor(private router: Router) {}

  onFormSubmitted() {
    this.message = 'Em breve entraremos em contato!';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
