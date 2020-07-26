import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerfilialeComponent } from './creerfiliale.component';

describe('CreerfilialeComponent', () => {
  let component: CreerfilialeComponent;
  let fixture: ComponentFixture<CreerfilialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerfilialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerfilialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
