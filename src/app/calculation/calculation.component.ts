import { Component } from '@angular/core';

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
  public minusRes() {
    this.summa = this.numberOne - this.numberTwo;
    this.symbol = 'вычитания';
  }

  public multiplyRes() {
    this.summa = this.numberOne * this.numberTwo;
    this.symbol = 'умножения';
  }

  public divideRes() {
    this.summa = this.numberOne / this.numberTwo;
    this.symbol ='деления';
  }

  public PlusRes() {
    this.summa = this.numberOne + this.numberTwo;
    this.symbol = 'cложение'
  }
}
