import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeuserComponent } from './welcomeuser.component';

describe('WelcomeuserComponent', () => {
  let component: WelcomeuserComponent;
  let fixture: ComponentFixture<WelcomeuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
