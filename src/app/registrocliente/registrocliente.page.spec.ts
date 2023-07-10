import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroclientePage } from './registrocliente.page';

describe('RegistroclientePage', () => {
  let component: RegistroclientePage;
  let fixture: ComponentFixture<RegistroclientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroclientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
