import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SismoPage } from './sismo.page';

describe('SismoPage', () => {
  let component: SismoPage;
  let fixture: ComponentFixture<SismoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SismoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
