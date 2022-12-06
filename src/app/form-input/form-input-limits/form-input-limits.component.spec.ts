import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputLimitsExampleComponent } from './form-input-limits.component';

describe('FormInputLimitsExampleComponent', () => {
  let component: FormInputLimitsExampleComponent;
  let fixture: ComponentFixture<FormInputLimitsExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputLimitsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputLimitsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
