import {Component} from '@angular/core';

export interface res {
  numOne: number
  numTwo: number
  symbol: string
}

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
  public numberOne: number;
  public numberTwo: number;
  public summa: number;
  public symbol: string;
  public res: string

  public minusRes() {
    this.summa = this.numberOne - this.numberTwo;
    this.symbol = 'вычитания';
    this.res = this.numberOne + '-' + this.numberTwo + '=' + this.summa;
  }

  public multiplyRes() {
    this.summa = this.numberOne * this.numberTwo;
    this.symbol = 'умножения';
    this.res = this.numberOne + '*' + this.numberTwo + '=' + this.summa;
  }

  public divideRes() {
    this.summa = this.numberOne / this.numberTwo;
    this.symbol = 'деления';
    this.res = this.numberOne + '/' + this.numberTwo + '=' + this.summa;
  }

  public PlusRes() {
    this.summa = this.numberOne + this.numberTwo;
    this.symbol = 'cложение';
    this.res = this.numberOne + '+' + this.numberTwo + '=' + this.summa;
  }
}
