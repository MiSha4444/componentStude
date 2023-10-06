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

  public minusRes() {
    this.summa = this.numberOne - this.numberTwo
  }

  public multiplyRes() {
    this.summa = this.numberOne * this.numberTwo
  }

  public divideRes() {
    this.summa = this.numberOne / this.numberTwo
  }

  public PlusRes() {
    this.summa = this.numberOne + this.numberTwo
  }
}
