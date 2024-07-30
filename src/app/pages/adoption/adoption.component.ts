import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormComponent } from '../../webcomponents/form/form.component';

@Component({
  selector: 'app-adoption',
  standalone: true,
  imports: [NgIf, FormComponent],
  templateUrl: './adoption.component.html',
  styleUrl: './adoption.component.scss',
})
export class AdoptionComponent implements OnInit {
  message = '';
  selectedCatName: string | null = null;
  showContactFeedback = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.selectedCatName = this.route.snapshot.queryParams['catName'] || '';
  }

  onFormSubmitted() {
    this.showContactFeedback = true;
    this.message = 'Em breve entraremos em contato!';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
