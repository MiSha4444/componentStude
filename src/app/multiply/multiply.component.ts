import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {
  @Output() multiplyOut = new EventEmitter<void>();

  multiplyEvent() {
    this.multiplyOut.emit()
  }
}
