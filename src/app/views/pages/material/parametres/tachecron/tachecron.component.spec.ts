import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TachecronComponent } from './tachecron.component';

describe('TachecronComponent', () => {
  let component: TachecronComponent;
  let fixture: ComponentFixture<TachecronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TachecronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TachecronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
