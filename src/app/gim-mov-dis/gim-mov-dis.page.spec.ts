import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GimMovDisPage } from './gim-mov-dis.page';

describe('GimMovDisPage', () => {
  let component: GimMovDisPage;
  let fixture: ComponentFixture<GimMovDisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GimMovDisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
