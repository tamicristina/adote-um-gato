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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.selectedCatName = params['catName'] || 'Desconhecido';
    });
  }

  onFormSubmitted() {
    this.message = 'Em breve entraremos em contato!';
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
  }
}
