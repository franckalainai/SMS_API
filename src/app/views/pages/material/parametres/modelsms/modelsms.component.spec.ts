import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsmsComponent } from './modelsms.component';

describe('ModelsmsComponent', () => {
  let component: ModelsmsComponent;
  let fixture: ComponentFixture<ModelsmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelsmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
