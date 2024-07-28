import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';
import { Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormComponent } from './webcomponents/form/form.component';

describe('AppComponent', () => {
  let logger: NGXLogger;
  let injector: Injector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        LoggerModule.forRoot({
          level: NgxLoggerLevel.DEBUG,
          serverLogLevel: NgxLoggerLevel.ERROR,
        }),
      ],
    }).compileComponents();

    logger = TestBed.inject(NGXLogger);
    injector = TestBed.inject(Injector);
  });

  it('should create the app', () => {
    spyOn(logger, 'debug').and.callThrough();
    spyOn(logger, 'info').and.callThrough();
    spyOn(logger, 'error').and.callThrough();
    spyOn(logger, 'trace').and.callThrough();
    spyOn(logger, 'log').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    expect(app).toBeTruthy();

    expect(logger.debug).toHaveBeenCalledWith('AppComponent inicializado');

    try {
      if (!customElements.get('form-element')) {
        const FormElement = createCustomElement(FormComponent, { injector });
        customElements.define('form-element', FormElement);
        expect(logger.debug).toHaveBeenCalledWith(
          'FormComponent registrado como web component'
        );
      }

      expect(logger.debug).toHaveBeenCalledWith(
        'O elemento customizado "form-element" já estava registrado'
      );
    } catch (error) {
      expect(logger.error).toHaveBeenCalledWith(
        'Erro ao tentar registrar o FormComponent',
        error
      );
    }

    expect(logger.info).toHaveBeenCalledWith(
      'AppComponent carregado com sucesso'
    );
    expect(logger.trace).toHaveBeenCalledWith(
      'A aplicação iniciou com título: ' + app.title
    );
    expect(logger.log).toHaveBeenCalledWith(
      'Execução do construtor do AppComponent'
    );
  });
});
