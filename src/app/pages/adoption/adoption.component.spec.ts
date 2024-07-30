import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AdoptionComponent } from './adoption.component';

class MockActivatedRoute {
  snapshot = {
    queryParams: { catName: 'MockCatName' },
  };
}

describe('AdoptionComponent', () => {
  let component: AdoptionComponent;
  let fixture: ComponentFixture<AdoptionComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionComponent],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        Router,
      ],
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
