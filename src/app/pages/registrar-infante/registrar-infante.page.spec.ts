import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarInfantePage } from './registrar-infante.page';

describe('RegistrarInfantePage', () => {
  let component: RegistrarInfantePage;
  let fixture: ComponentFixture<RegistrarInfantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarInfantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
