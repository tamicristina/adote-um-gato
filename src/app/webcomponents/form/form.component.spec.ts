import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent, ReactiveFormsModule],
      providers: [FormBuilder],
      schemas: [NO_ERRORS_SCHEMA], // Adicionado para ignorar erros de componentes filhos
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title and button label correctly', () => {
    component.title = 'Test Title';
    component.buttonLabel = 'Submit';
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('#formTitle')
    ).nativeElement;
    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;

    expect(titleElement.textContent).toContain('Test Title');
    expect(buttonElement.textContent).toContain('Submit');
  });

  it('should be invalid when form is empty', () => {
    fixture.detectChanges();

    expect(component.form.valid).toBeFalse();
    expect(component.form.pristine).toBeTrue();
  });

  it('should be valid when form is filled correctly', () => {
    component.form.controls['name'].setValue('Test Name');
    component.form.controls['email'].setValue('test@example.com');
    component.form.controls['pet'].setValue('Test Pet');
    component.form.controls['mensagem'].setValue('Test message');

    fixture.detectChanges();

    expect(component.form.valid).toBeTrue();
  });

  it('should emit formSubmitted event when form is submitted', () => {
    spyOn(component.formSubmitted, 'emit');

    component.form.controls['name'].setValue('Test Name');
    component.form.controls['email'].setValue('test@example.com');
    component.form.controls['pet'].setValue('Test Pet');
    component.form.controls['mensagem'].setValue('Test message');

    fixture.detectChanges();

    component.onSubmit();

    expect(component.formSubmitted.emit).toHaveBeenCalled();
  });
});
