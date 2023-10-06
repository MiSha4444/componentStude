import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent {
  @Output() diveOut = new EventEmitter<void>();

  public divideEvent() {
    this.diveOut.emit()
  }
}
