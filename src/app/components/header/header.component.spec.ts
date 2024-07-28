import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header content', () => {
    const headerElement: HTMLElement = fixture.debugElement.query(
      By.css('.header')
    ).nativeElement;
    const pElements = headerElement.getElementsByTagName('p');
    const h1Element = headerElement.getElementsByTagName('h1')[0];

    expect(pElements.length).toBe(2);
    expect(pElements[0].textContent).toContain('Galeria de Fotos');
    expect(h1Element.textContent).toContain('Adote um gato');
    expect(pElements[1].textContent).toContain(
      'Veja fotos incríveis de gatos com detalhes sobre suas raças.'
    );
  });
});
