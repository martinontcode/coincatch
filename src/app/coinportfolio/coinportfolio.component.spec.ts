import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinportfolioComponent } from './coinportfolio.component';

describe('CoinportfolioComponent', () => {
  let component: CoinportfolioComponent;
  let fixture: ComponentFixture<CoinportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
