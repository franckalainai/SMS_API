import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngeComponent } from './ange.component';

describe('AngeComponent', () => {
  let component: AngeComponent;
  let fixture: ComponentFixture<AngeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
