import { Component } from '@angular/core';

@Component({
  selector: 'app-form-ex1',
  templateUrl: './form-ex1.component.html',
  styleUrls: ['./form-ex1.component.css']
})
export class FormEx1Component {
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
