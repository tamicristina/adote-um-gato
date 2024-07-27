import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { AdoptionComponent } from './adoption.component';
import { Router } from '@angular/router';

describe('AdoptionComponent', () => {
  let component: AdoptionComponent;
  let fixture: ComponentFixture<AdoptionComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdoptionComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message when form is submitted', () => {
    component.onFormSubmitted();
    fixture.detectChanges();
    const messageElement =
      fixture.debugElement.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain(
      'Em breve entraremos em contato!'
    );
  });

  it('should navigate to the home page after 3 seconds', fakeAsync(() => {
    spyOn(router, 'navigate');
    component.onFormSubmitted();
    tick(3000);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  }));
});
