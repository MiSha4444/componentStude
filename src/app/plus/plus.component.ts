import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent {
  @Output() plusOut = new EventEmitter<void>;

  public plusEvent(): void {
    this.plusOut.emit()
  }
}
