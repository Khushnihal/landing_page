import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTraining } from './it-training';

describe('ItTraining', () => {
  let component: ItTraining;
  let fixture: ComponentFixture<ItTraining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItTraining]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTraining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
