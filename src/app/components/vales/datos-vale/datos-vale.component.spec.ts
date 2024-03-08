import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosValeComponent } from './datos-vale.component';

describe('DatosValeComponent', () => {
  let component: DatosValeComponent;
  let fixture: ComponentFixture<DatosValeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosValeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatosValeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
