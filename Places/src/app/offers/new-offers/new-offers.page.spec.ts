import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewOffersPage } from './new-offers.page';

describe('NewOffersPage', () => {
  let component: NewOffersPage;
  let fixture: ComponentFixture<NewOffersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
