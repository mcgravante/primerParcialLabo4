import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarProductoEnContainerComponent } from './cargar-producto-en-container.component';

describe('CargarProductoEnContainerComponent', () => {
  let component: CargarProductoEnContainerComponent;
  let fixture: ComponentFixture<CargarProductoEnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarProductoEnContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarProductoEnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
