import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-mathgamep2',
  templateUrl: './mathgamep2.component.html',
  styleUrls: ['./mathgamep2.component.css'],
})
export class Mathgamep2Component implements OnInit {

  formGroup1: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.formGroup1 = new FormGroup ({
      gameInformation: new FormGroup({

      }),
    });
  }

}

export class InstantErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }
}
