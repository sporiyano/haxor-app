// Signup.page.spec.ts
// Signup page test declaration
// -------------------------------------------------------------------------------------------------

// importing modules
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// custom modules
import { SignupPage } from '@app/modules/auth/signup/signup.page';

// describing the component tests
describe('SignupPage', () => {
  // declaring variables
  let component: SignupPage;
  let fixture: ComponentFixture<SignupPage>;

  // fires before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // fires before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing if the page was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
