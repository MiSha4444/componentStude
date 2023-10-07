import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() summa: number;
  @Input() symbol: string;
  @Input() res: string;
  public results = [];

  public hide: boolean = true;
  public date: Date = new Date();

  result() {
    if (this.summa != 0 && this.res) {
      console.log(this.summa);
      this.hide = !this.hide;
      // @ts-ignore
      this.results.push(this.res);
      console.log(this.results);
    }
  }
}
