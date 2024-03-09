import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCategoriesComponent } from './catalog-categories.component';

describe('CatalogCategoriesComponent', () => {
  let component: CatalogCategoriesComponent;
  let fixture: ComponentFixture<CatalogCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
