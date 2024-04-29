import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPersonalComponent } from './tabla-personal.component';

describe('TablaPersonalComponent', () => {
  let component: TablaPersonalComponent;
  let fixture: ComponentFixture<TablaPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPersonalComponent]
    });
    fixture = TestBed.createComponent(TablaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
