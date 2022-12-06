import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputPercentageExampleComponent } from './form-input-percentage.component';

describe('FormInputPercentageExampleComponent', () => {
  let component: FormInputPercentageExampleComponent;
  let fixture: ComponentFixture<FormInputPercentageExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputPercentageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputPercentageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
