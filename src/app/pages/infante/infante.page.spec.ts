import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfantePage } from './infante.page';

describe('InfantePage', () => {
  let component: InfantePage;
  let fixture: ComponentFixture<InfantePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InfantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
