import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturaClienteComponent } from './captura-cliente.component';

describe('CapturaClienteComponent', () => {
  let component: CapturaClienteComponent;
  let fixture: ComponentFixture<CapturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturaClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
