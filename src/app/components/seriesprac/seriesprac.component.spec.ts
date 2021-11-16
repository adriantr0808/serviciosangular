import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriespracComponent } from './seriesprac.component';

describe('SeriespracComponent', () => {
  let component: SeriespracComponent;
  let fixture: ComponentFixture<SeriespracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriespracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriespracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
