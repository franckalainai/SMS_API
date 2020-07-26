import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuelComponent } from './individuel.component';

describe('IndividuelComponent', () => {
  let component: IndividuelComponent;
  let fixture: ComponentFixture<IndividuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
