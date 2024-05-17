import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPropiedadPage } from './registrar-propiedad.page';

describe('RegistrarPropiedadPage', () => {
  let component: RegistrarPropiedadPage;
  let fixture: ComponentFixture<RegistrarPropiedadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPropiedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
