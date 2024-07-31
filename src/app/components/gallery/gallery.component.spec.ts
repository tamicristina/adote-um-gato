import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { GalleryComponent } from './gallery.component';
import { By } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { CatsData } from '../../interfaces/cat.interface';
import { Router } from '@angular/router';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // Importando o componente Gallery e o módulo de logger
        GalleryComponent,
        LoggerModule.forRoot({
          level: NgxLoggerLevel.DEBUG,
          serverLogLevel: NgxLoggerLevel.ERROR,
        }),
      ],
      providers: [
        // Fornecendo clientes HTTP, testes HTTP e Router
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate'),
          }, // Mock do Router
        },
      ],
    }).compileComponents();

    // Criando a instância do componente
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    navigateSpy = router.navigate as jasmine.Spy;

    // Definindo dados mock de teste para o componente
    component.catsData = [
      {
        url: 'https://example.com/cat1.jpg',
        breeds: [],
        id: '',
        width: 0,
        height: 0,
      },
      {
        url: 'https://example.com/cat2.jpg',
        breeds: [],
        id: '',
        width: 0,
        height: 0,
      },
      {
        url: 'https://example.com/cat3.jpg',
        breeds: [],
        id: '',
        width: 0,
        height: 0,
      },
    ];
    // Detectando mudanças no componente
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render gallery with images', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const galleryWrapper: HTMLElement = fixture.debugElement.query(
      By.css('.gallery-wrapper')
    ).nativeElement;
    expect(galleryWrapper).toBeTruthy();

    const gridWrapper: HTMLElement = fixture.debugElement.query(
      By.css('.grid-wrapper')
    ).nativeElement;
    expect(gridWrapper).toBeTruthy();

    const imageElements = gridWrapper.getElementsByClassName('cat-image');
    expect(imageElements.length).toBe(3);
    expect((imageElements[0] as HTMLImageElement).src).toContain(
      'https://example.com/cat1.jpg'
    );
    expect((imageElements[1] as HTMLImageElement).src).toContain(
      'https://example.com/cat2.jpg'
    );
    expect((imageElements[2] as HTMLImageElement).src).toContain(
      'https://example.com/cat3.jpg'
    );
  }));

  describe('When the component is loading', () => {
    it('the spinner should be displayed', () => {
      component.isLoading = true;
      fixture.detectChanges();

      const galleryWrapper: HTMLElement = fixture.debugElement.query(
        By.css('.gallery-wrapper')
      ).nativeElement;

      expect(galleryWrapper.querySelector('mat-spinner')).toBeTruthy();
    });
  });
  describe('When the component is not loading', () => {
    it('the spinner should not be displayed', () => {
      component.isLoading = false;
      component.catsData = [
        {
          url: 'test-url',
          breeds: [{ name: 'Test Breed' }],
          details: 'Test Details',
        },
      ] as CatsData[];

      fixture.detectChanges();

      const galleryWrapper: HTMLElement = fixture.debugElement.query(
        By.css('.gallery-wrapper')
      ).nativeElement;

      expect(galleryWrapper.querySelector('mat-spinner')).toBeFalsy();
    });
  });

  describe('when an error happens', () => {
    it('should display the error section ', () => {
      component.isError = true;
      fixture.detectChanges();

      const gridWrapper: HTMLElement = fixture.debugElement.query(
        By.css('.error-section')
      ).nativeElement;
      expect(gridWrapper).toBeTruthy();
    });
  });

  it('should navigate to adoption form with the correct cat breed name', () => {
    const catBreedName = 'Siamese';

    component.navigateToCatAdoptionForm(catBreedName);

    expect(component.selectedCatBreedName).toBe(catBreedName);

    expect(navigateSpy).toHaveBeenCalledWith(['/adoption'], {
      queryParams: { catBreedName },
    });
  });
});
