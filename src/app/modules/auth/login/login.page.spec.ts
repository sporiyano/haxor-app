// Login.page.spec.ts
// Login page test declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// custom modules
import { LoginPage } from '@app/modules/auth/login/login.page';

// describing the component tests
describe('LoginPage', () => {
  // declaring variables
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  // fires before each test
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  // fires before each test
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // testing if the page was created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
