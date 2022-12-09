import { Component } from '@angular/core';
import { FormBuilder,ReactiveFormsModule  } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';


@Component({
  selector: 'app-form-ex7',
  templateUrl: './form-ex7.component.html',
  styleUrls: ['./form-ex7.component.css']
})
export class FormEx7Component {
  inputForm = this.formBuilder.group({
    email: '',
    senha: ''
  })

  constructor(private localStorage: LocalStorageService,private formBuilder: FormBuilder){

  }


  onSubmit(){
    this.localStorage.set('user',this.inputForm.value);
  }

  showData(){
    alert(this.localStorage.get('user'));
  }
}
