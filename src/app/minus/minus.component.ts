import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-minus',
  templateUrl: './minus.component.html',
  styleUrls: ['./minus.component.css']
})
export class MinusComponent {
  @Output() minusOut = new EventEmitter<void>();

  minusEvent() {
    this.minusOut.emit()
  }
}
