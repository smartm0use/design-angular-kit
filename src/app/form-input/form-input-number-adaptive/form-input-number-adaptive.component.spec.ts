import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputNumberAdaptiveExampleComponent } from './form-input-number-adaptive.component';

describe('FormInputNumberAdaptiveExampleComponent', () => {
  let component: FormInputNumberAdaptiveExampleComponent;
  let fixture: ComponentFixture<FormInputNumberAdaptiveExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputNumberAdaptiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputNumberAdaptiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
