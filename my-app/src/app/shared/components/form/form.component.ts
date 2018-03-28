import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // https://angular.io/guide/reactive-forms
  form: FormGroup;
  libelles = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [// <--- the FormControl called "name"
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ]),
      ],
      reference: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ]),
      ],
      state: [State.ALIVRER]
    });
  }

  ngOnInit() {

  }

  process(): void {
    this.nItem.emit(this.form.value);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  hasError(inputName: string): boolean {
    return this.form.get(inputName).touched && this.form.get(inputName).invalid;
  }
}
