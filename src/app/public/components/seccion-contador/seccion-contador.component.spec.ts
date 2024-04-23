import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionContadorComponent } from './seccion-contador.component';

describe('SeccionContadorComponent', () => {
  let component: SeccionContadorComponent;
  let fixture: ComponentFixture<SeccionContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionContadorComponent]
    });
    fixture = TestBed.createComponent(SeccionContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
