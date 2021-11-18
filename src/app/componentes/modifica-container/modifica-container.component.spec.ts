import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaContainerComponent } from './modifica-container.component';

describe('ModificaContainerComponent', () => {
  let component: ModificaContainerComponent;
  let fixture: ComponentFixture<ModificaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
