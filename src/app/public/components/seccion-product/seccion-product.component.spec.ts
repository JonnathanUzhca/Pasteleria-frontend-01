import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionProductComponent } from './seccion-product.component';

describe('SeccionProductComponent', () => {
  let component: SeccionProductComponent;
  let fixture: ComponentFixture<SeccionProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeccionProductComponent]
    });
    fixture = TestBed.createComponent(SeccionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
