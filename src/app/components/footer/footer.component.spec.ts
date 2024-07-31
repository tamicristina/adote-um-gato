import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    // Configuração do módulo de teste
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    // Criando a instância do componente
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    // Detectando mudanças no componente
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an image with alt text "Pata de um gato laranja, logotipo do site"', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imgElement).toBeTruthy();
    expect(imgElement.getAttribute('alt')).toBe(
      'Pata de um gato laranja, logotipo do site'
    );
  });
});
