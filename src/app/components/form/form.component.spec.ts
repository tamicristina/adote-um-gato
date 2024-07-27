import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when form is empty', () => {
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form.checkValidity()).toBeFalse();
  });

  it('should be valid when form is filled correctly', () => {
    const nameInput = fixture.debugElement.query(
      By.css('input[name="name"]')
    ).nativeElement;
    const emailInput = fixture.debugElement.query(
      By.css('input[name="email"]')
    ).nativeElement;
    const messageTextarea = fixture.debugElement.query(
      By.css('textarea[name="message"]')
    ).nativeElement;

    nameInput.value = 'Test Name';
    emailInput.value = 'test@example.com';
    messageTextarea.value = 'Test message';

    nameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    messageTextarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    expect(form.checkValidity()).toBeTrue();
  });

  it('should emit formSubmitted event when form is submitted', () => {
    spyOn(component.formSubmitted, 'emit');

    const nameInput = fixture.debugElement.query(
      By.css('input[name="name"]')
    ).nativeElement;
    const emailInput = fixture.debugElement.query(
      By.css('input[name="email"]')
    ).nativeElement;
    const messageTextarea = fixture.debugElement.query(
      By.css('textarea[name="message"]')
    ).nativeElement;

    nameInput.value = 'Test Name';
    emailInput.value = 'test@example.com';
    messageTextarea.value = 'Test message';

    nameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    messageTextarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));

    expect(component.formSubmitted.emit).toHaveBeenCalled();
  });
});
