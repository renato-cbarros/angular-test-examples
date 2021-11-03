import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent, ListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) getSavings(): shoud have savings 10', () => {
    expect(component.getSavings).toEqual(10);
  });

  it('(U) getWallet(): shoud have wallet 50', () => {
    expect(component.getWallet).toEqual(50);
  });

  it('(U) setWithdraw(): shoud transferer savings from wallet', () => {
    component.setWithdraw('10');
    expect(component.getSavings).toEqual(0);
    expect(component.getWallet).toEqual(60);
  });

  it('(U) setWithdraw(): shoud transferer savings dont have string or savings < value', () => {
    expect(component.setWithdraw('string')).not.toBeTruthy();
    expect(component.setWithdraw('100')).not.toBeTruthy();

    expect(component.getSavings).toEqual(10);
    expect(component.getWallet).toEqual(50);
  });

  it('(I) setWithdraw(): shoud transferer savings from wallet', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#withdraw-input').value = '10';
    el.querySelector('#withdraw-btn').click();
    fixture.detectChanges();

    expect(el.querySelector('#wallet-value').textContent).toEqual('60');
  });

  it('(U) setDeposit(): shoud transferer wallet from savings', () => {
    component.setDeposit('50');
    expect(component.getWallet).toEqual(0);
    expect(component.getSavings).toEqual(60);
  });

  it('(U) setDeposit(): shoud transferer wallet dont have string or wallet < value', () => {
    expect(component.setDeposit('string')).not.toBeTruthy();
    expect(component.setDeposit('100')).not.toBeTruthy();

    expect(component.getSavings).toEqual(10);
    expect(component.getWallet).toEqual(50);
  });

  it('(I) setDeposit(): shoud transferer wallet from savings', () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#deposit-input').value = '10';
    el.querySelector('#deposit-btn').click();
    fixture.detectChanges();

    expect(el.querySelector('#savings-value').textContent).toEqual('20');
  });
});
