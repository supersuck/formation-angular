import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() item: Item;
  @Output() nItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  createForm() {
    this.form = this.fb.group({
      name: [// <--- the FormControl called "name"
        this.item ? this.item.name : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ]),
      ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ]),
      ],
      state: [
        this.item ? this.item.state : State.ALIVRER,
      ]
    });
  }

  ngOnInit() {
    this.createForm();
  }

  getItem() {
    const data = this.form.value;
    if (!this.item) {
      return data;
    }

    const id = this.item.id;
    return {id, ...data};
  }

  process(): void {
    const data = this.getItem();
    this.nItem.emit(data);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  hasError(inputName: string): boolean {
    return this.form.get(inputName).touched && this.form.get(inputName).invalid;
  }
}
