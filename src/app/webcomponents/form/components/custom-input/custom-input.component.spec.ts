import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputComponent } from './custom-input.component';
import { By } from '@angular/platform-browser';
import { Validators } from '@angular/forms';

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the input field with the correct type', () => {
    component.type = 'text';
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
    expect(input.nativeElement.getAttribute('type')).toBe('text');
  });

  it('should display the textarea if isTextarea is true', () => {
    component.isTextarea = true;
    fixture.detectChanges();
    const textarea = fixture.debugElement.query(By.css('textarea'));
    expect(textarea).toBeTruthy();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeFalsy(); // Ensure input is not present
  });

  it('should initialize the control with the provided value', () => {
    component.value = 'Test Value';
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.control.value).toBe('Test Value');
  });

  it('should call writeValue when the value is set', () => {
    const newValue = 'New Value';
    component.writeValue(newValue);
    fixture.detectChanges();
    expect(component.control.value).toBe(newValue);
  });

  it('should call registerOnChange and react to value changes', () => {
    const newValue = 'Changed Value';
    const spy = spyOn(
      component.control.valueChanges,
      'subscribe'
    ).and.callThrough();
    component.registerOnChange(() => {});
    fixture.detectChanges();
    component.control.setValue(newValue);
    expect(spy).toHaveBeenCalled();
  });

  it('should display the correct placeholder in textarea', () => {
    component.isTextarea = true;
    fixture.detectChanges();
    const textarea = fixture.debugElement.query(By.css('textarea'));
    expect(textarea.nativeElement.getAttribute('placeholder')).toBe(
      'Digite sua mensagem aqui...'
    );
  });

  it('should display error message if control is invalid and touched', () => {
    component.control.setValidators(Validators.required);
    component.control.markAsTouched();
    component.control.updateValueAndValidity();
    fixture.detectChanges();
    const errorDiv = fixture.debugElement.query(By.css('.text-danger'));
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.nativeElement.textContent).toContain(
      'Este campo é obrigatório'
    );
  });
});
