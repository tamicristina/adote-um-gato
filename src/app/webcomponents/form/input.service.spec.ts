import { TestBed } from '@angular/core/testing';
import { NgElement, WithProperties } from '@angular/elements';
import { FormComponent } from './form.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { InputService } from './input.service';

describe('InputService', () => {
  let service: InputService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormComponent],
      providers: [InputService],
    });
    service = TestBed.inject(InputService);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create and append input element', () => {
    spyOn(document.body, 'appendChild').and.callThrough();

    const inputEl = document.createElement('input-element') as NgElement &
      WithProperties<CustomInputComponent>;

    inputEl.label = 'label';
    inputEl.type = 'type';
    inputEl.isTextarea = false;
    inputEl.value = 'value';
    inputEl.formControlName = 'name';

    spyOn(document, 'createElement').and.returnValue(inputEl);

    service.showAsElement('label', 'tipe', false, 'value', 'name');

    expect(document.createElement).toHaveBeenCalledWith('input-element');
    expect(document.body.appendChild).toHaveBeenCalledWith(inputEl);
  });
});
