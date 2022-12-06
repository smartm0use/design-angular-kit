import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { FormInputCurrencyExampleComponent } from './form-input-currency.component';

describe('FormInputCurrencyExampleComponent', () => {
  let component: FormInputCurrencyExampleComponent;
  let fixture: ComponentFixture<FormInputCurrencyExampleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputCurrencyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputCurrencyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
