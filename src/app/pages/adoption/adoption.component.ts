import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormComponent } from '../../webcomponents/form/form.component';
import { CustomInputComponent } from '../../webcomponents/form/components/custom-input/custom-input.component';

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [NgIf, FormComponent, CustomInputComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.scss',
})
export class AdoptionComponent implements OnInit {
  contactMessage = '';
  selectedCatBreedName: string | null = null;
  showContactFeedback = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedCatBreedName =
      this.route.snapshot.queryParams['catBreedName'] || '';
  }

  onFormSubmitted() {
    this.showContactFeedback = true;
    this.contactMessage = 'Em breve entraremos em contato!';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
