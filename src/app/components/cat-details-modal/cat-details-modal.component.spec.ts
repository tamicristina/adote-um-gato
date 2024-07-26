import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDetailsModalComponent } from './cat-details-modal.component';

describe('CatDetailsModalComponent', () => {
  let component: CatDetailsModalComponent;
  let fixture: ComponentFixture<CatDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
