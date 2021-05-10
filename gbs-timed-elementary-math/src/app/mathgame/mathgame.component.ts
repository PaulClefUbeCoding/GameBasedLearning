import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatStepper } from '@angular/material/stepper';
import { timer } from 'rxjs';

@Component({
  selector: 'app-mathgame',
  templateUrl: './mathgame.component.html',
  styleUrls: ['./mathgame.component.css'],
  animations: [
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '400ms',
          style({
            opacity: 1,
          })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(
          '400ms',
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class MathgameComponent implements OnInit {

  title: string;
  public isViewable: boolean;
  formGroup1: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();

  digits: number[] = [1,2,3];
  challenges: number[] = [5, 10, 20];
  selectedDigit: number;
  selectedChallenge: number;

  intervalId = 0;
  message = '';
  seconds = 5;

  number1: number;
  number2: number;
  equation: string;

  clearTimer() { 
    clearInterval(this.intervalId); 
  }

  constructor() { }

  ngOnInit(): void {
    this.title = "Mental Math Blitz";
    this.formGroup1 = new FormGroup ({
      gameInformation: new FormGroup({
        name: new FormControl(null,),
        digits: new FormControl(null,),
        timer: new FormControl(null, ),
      }),
    });
  }

  startTimer() {
    console.log("inside start timer");
    console.log("Digit selected:" + this.selectedDigit);
    console.log("Digit selected:" + this.selectedChallenge);
    this.generateTheNumbers();
    this.seconds = this.formGroup1.value.gameInformation.timer;
    this.countDownTimer(); 
  }
  stopTimer() {
    this.clearTimer(); this.message = 'You have' +  this.seconds + 'seconds!'
  }

  public toggle(): void {
    this.isViewable = !this.isViewable;
  }

  public countDownTimer() {
    console.log("inside countdown timer");
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if(this.seconds === 0) {
        this.message = 'Times up! Next Challenge!';
      } else {
        if (this.seconds < 0) { this.seconds = this.formGroup1.value.gameInformation.timer;} //reset
        this.message = this.seconds+ 'seconds left!'
      }
    }, 1000);
  }

  public generateTheNumbers() {
    // if()
    // this.number1 = Math.random()*
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
