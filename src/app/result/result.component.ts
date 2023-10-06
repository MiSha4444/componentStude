import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() summa: number;
  public hide: boolean = true

  result() {
    if (this.summa != 0) {
      console.log(this.summa)
      this.hide = !this.hide
    }
  }
}
