import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatenceComponent } from './latence.component';

describe('LatenceComponent', () => {
  let component: LatenceComponent;
  let fixture: ComponentFixture<LatenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
