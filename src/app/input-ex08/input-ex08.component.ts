
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-ex08',
  templateUrl: './input-ex08.component.html',
  styleUrls: ['./input-ex08.component.css']
})
export class InputEx08Component {
  @Output() searchEvent = new EventEmitter();
  texto = '';

  changeValue(event:Event){
    this.texto = (<HTMLInputElement>event.target).value;
    this.feedback()
  }

  feedback(){
    this.searchEvent.emit(this.texto);
  }
}
