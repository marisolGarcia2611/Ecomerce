import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraProductComponent } from './compra-product.component';

describe('CompraProductComponent', () => {
  let component: CompraProductComponent;
  let fixture: ComponentFixture<CompraProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompraProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
