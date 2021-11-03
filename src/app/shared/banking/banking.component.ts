import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private savings: number = 10;
  private wallet: number = 50;

  constructor() {}

  ngOnInit(): void {}

  get getSavings(): number {
    return this.savings;
  }

  get getWallet(): number {
    return this.wallet;
  }

  public setWithdraw = (value: string): number | undefined => {
    const withdraw = Number(value);
    if (isNaN(withdraw) || this.savings < withdraw) {
      return;
    }

    this.savings -= withdraw;
    return (this.wallet += withdraw);
  };

  public setDeposit(value: string): number | undefined {
    const deposit = Number(value);
    if (isNaN(deposit) || this.wallet < deposit) {
      return;
    }

    this.wallet -= deposit;
    return (this.savings += deposit);
  }
}
