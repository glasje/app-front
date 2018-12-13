import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectModulesComponent } from './select-modules.component';

describe('SelectModulesComponent', () => {
  let component: SelectModulesComponent;
  let fixture: ComponentFixture<SelectModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
