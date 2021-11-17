import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoempleadosdetalleComponent } from './listadoempleadosdetalle.component';

describe('ListadoempleadosdetalleComponent', () => {
  let component: ListadoempleadosdetalleComponent;
  let fixture: ComponentFixture<ListadoempleadosdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoempleadosdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoempleadosdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
