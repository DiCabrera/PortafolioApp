import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElegirPropiedadPage } from './elegir-propiedad.page';

describe('ElegirPropiedadPage', () => {
  let component: ElegirPropiedadPage;
  let fixture: ComponentFixture<ElegirPropiedadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirPropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
