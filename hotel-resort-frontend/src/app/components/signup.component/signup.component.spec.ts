import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';
import { UserService } from 'src/app/services/user.service'; 
import { of, throwError } from 'rxjs';
import { User } from 'src/app/models/user.models';


describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ UserService ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default signupForm values', () => {
    expect(component.signupForm.name).toBe('');
    expect(component.signupForm.email).toBe('');
    expect(component.signupForm.password).toBe('');
    expect(component.signupForm.role).toBe('customer');
  });

  it('should signup successfully', () => {
    const mockResponse: User = {
  id: 1,
  name: 'Test User',
  email: 'test@test.com',
  password: '123456',
  role: 'customer'
};
spyOn(userService, 'createUser').and.returnValue(of(mockResponse));

    component.signupForm = { name: 'Test User', email: 'test@test.com', password: '123456', role: 'customer' };
    component.onSubmit();

    expect(userService.createUser).toHaveBeenCalledWith(component.signupForm);
    expect(component.errorMessage).toBe('');
  });

  it('should show error message on failed signup', () => {
    spyOn(userService, 'createUser').and.returnValue(throwError(() => new Error('Signup failed')));

    component.signupForm = { name: 'Test User', email: 'wrong@test.com', password: '123456', role: 'customer' };
    component.onSubmit();

    expect(component.errorMessage).toBe('Signup failed. Please try again.');
  });
});
