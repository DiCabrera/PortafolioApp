import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerInfantesPage } from './ver-infantes.page';

describe('VerInfantesPage', () => {
  let component: VerInfantesPage;
  let fixture: ComponentFixture<VerInfantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInfantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
