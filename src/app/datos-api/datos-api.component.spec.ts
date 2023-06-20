import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosApiComponent } from './datos-api.component';

describe('DatosApiComponent', () => {
  let component: DatosApiComponent;
  let fixture: ComponentFixture<DatosApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosApiComponent]
    });
    fixture = TestBed.createComponent(DatosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
