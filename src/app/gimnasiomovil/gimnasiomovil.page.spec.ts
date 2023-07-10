import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GimnasiomovilPage } from './gimnasiomovil.page';

describe('GimnasiomovilPage', () => {
  let component: GimnasiomovilPage;
  let fixture: ComponentFixture<GimnasiomovilPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GimnasiomovilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
