import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimatedConsoleComponent } from './animated-console.component';

describe('AnimatedConsoleComponent', () => {
  let component: AnimatedConsoleComponent;
  let fixture: ComponentFixture<AnimatedConsoleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
