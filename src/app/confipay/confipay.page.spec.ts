import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfipayPage } from './confipay.page';

describe('ConfipayPage', () => {
  let component: ConfipayPage;
  let fixture: ComponentFixture<ConfipayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfipayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
