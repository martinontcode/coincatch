import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinpickerComponent } from './coinpicker.component';

describe('CoinpickerComponent', () => {
  let component: CoinpickerComponent;
  let fixture: ComponentFixture<CoinpickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinpickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
