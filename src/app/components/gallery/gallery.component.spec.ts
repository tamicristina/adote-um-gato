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

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GalleryComponent,
        LoggerModule.forRoot({
          level: NgxLoggerLevel.DEBUG,
          serverLogLevel: NgxLoggerLevel.ERROR,
        }),
      ],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;

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
      component.error = true;
      fixture.detectChanges();

      const gridWrapper: HTMLElement = fixture.debugElement.query(
        By.css('.error-section')
      ).nativeElement;
      expect(gridWrapper).toBeTruthy();
    });
  });
});
