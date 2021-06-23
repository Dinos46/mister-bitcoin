import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisterBitcoinAppComponent } from './mister-bitcoin-app.component';

describe('MisterBitcoinAppComponent', () => {
  let component: MisterBitcoinAppComponent;
  let fixture: ComponentFixture<MisterBitcoinAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisterBitcoinAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisterBitcoinAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
