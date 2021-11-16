import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajespracComponent } from './personajesprac.component';

describe('PersonajespracComponent', () => {
  let component: PersonajespracComponent;
  let fixture: ComponentFixture<PersonajespracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajespracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajespracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
