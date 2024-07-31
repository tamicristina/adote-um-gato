import { TestBed } from '@angular/core/testing';
import { FormService } from './form.service';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormComponent],
      providers: [FormService],
    });
    service = TestBed.inject(FormService); // Cria uma instância do FormService
  });

  afterEach(() => {
    // Remove todos os elementos do formulário após cada teste
    const formElements = document.querySelectorAll('form-element');
    formElements.forEach((el) => el.remove());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create and append form element', () => {
    spyOn(document.body, 'appendChild').and.callThrough();

    // Cria um elemento de formulário fictício e define suas propriedades
    const formEl = document.createElement('form-element') as NgElement &
      WithProperties<FormComponent>;
    formEl.title = 'Test Title';
    formEl.buttonLabel = 'Submit';

    spyOn(document, 'createElement').and.returnValue(formEl);

    service.showAsElement('Test Title', 'Submit', 'Cymric');

    expect(document.createElement).toHaveBeenCalledWith('form-element');
    expect(document.body.appendChild).toHaveBeenCalledWith(formEl);
  });
});
