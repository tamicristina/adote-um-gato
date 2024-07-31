import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CatsData } from '../../interfaces/cat.interface';
import { CatApiService } from '../../services/cat-api.service';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  catsData: CatsData[] = [];
  // Raça do gato selecionado para exibir no formulário de adoção
  selectedCatBreedName: string | null = null;
  isError = false;
  isLoading = true;

  // Descrições dos gatos
  catDetais: string[] = [
    'Este gatinho é super carinhoso e adora um colo quentinho!',
    'Um amigo brincalhão que vai fazer você rir com suas travessuras!',
    'Sempre curioso, esse gato gosta de explorar todos os cantinhos da casa!',
    'Calmo e gentil, ele adora receber carinho e fazer festinhas.',
    'Esse gatinho é muito esperto e aprende truques rapidinho!',
    'Esse gatinho é muito esperto e aprende truques rapidinho!',
    'Amigo de todos, ele se dá bem com outros animais e adora companhia!',
    'Este gato é um verdadeiro aventureiro e adora se esconder para brincar!',
    'Este gato é um verdadeiro aventureiro e adora se esconder para brincar!',
    'Adora uma boa soneca e vai te acompanhar em todos os momentos relaxantes.',
    'Adora brincar com bolinhas e correr pela casa.',
    'Carinhoso e sempre procura um colo para dormir.',
    'Curioso e explora todos os cantinhos da casa.',
    'Travesso e adora fazer pequenas travessuras.',
    'Tranquilo e gosta de relaxar ao sol.',
  ];

  constructor(
    private catApiService: CatApiService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.loadCatImages();
  }

  loadCatImages(): void {
    this.catApiService.getCatImagesWithBreedData().subscribe({
      next: (data) => {
        this.catsData = data;
        this.isLoading = false;
        // Adiciona descrições ao objeto de dados dos gatos
        this.catsData.forEach((cat, index) => {
          cat.details = this.catDetais[index] || 'Detalhes não disponível';
        });
      },
      error: (err) => {
        this.isLoading = false;
        this.isError = true;
        this.logger.error('Falha na requisição', err);
      },
    });
  }

  navigateToCatAdoptionForm(catBreedName: string) {
    // Atribui a raça do gato selecionado a variável
    this.selectedCatBreedName = catBreedName;
    // Navega para a página de adoção passando a raça via parâmetro de rota
    this.router.navigate(['/adoption'], { queryParams: { catBreedName } });
  }
}
