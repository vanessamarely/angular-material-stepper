import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroStepperComponent } from './intro-stepper.component';

describe('IntroStepperComponent', () => {
  let component: IntroStepperComponent;
  let fixture: ComponentFixture<IntroStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
