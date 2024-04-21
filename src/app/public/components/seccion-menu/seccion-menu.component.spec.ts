import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMenuComponent } from './seccion-menu.component';

describe('SeccionMenuComponent', () => {
  let component: SeccionMenuComponent;
  let fixture: ComponentFixture<SeccionMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionMenuComponent]
    });
    fixture = TestBed.createComponent(SeccionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
