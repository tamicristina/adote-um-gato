import { TestBed } from '@angular/core/testing';
import { FormService } from './form.service';
import { FormComponent } from './form.component';
import { NgElement, WithProperties } from '@angular/elements';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormService],
    });
    service = TestBed.inject(FormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create and append form element', () => {
    spyOn(document.body, 'appendChild');

    service.showAsElement('Test Title');

    const formEl = document.createElement('form-element') as NgElement &
      WithProperties<FormComponent>;
    formEl.title = 'Test Title';

    expect(document.body.appendChild).toHaveBeenCalledWith(formEl);
  });
});
