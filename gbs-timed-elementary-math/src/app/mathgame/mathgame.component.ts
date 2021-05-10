import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
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
  @ViewChild('stepper') private myStepper: MatStepper;

  title: string;
  public isViewable: boolean;
  formGroup1: FormGroup;
  errorStateMatcher = new InstantErrorStateMatcher();

  digits: number[] = [1,2,3];
  challenges: number[] = [5, 10, 20];
  operations: string[] = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
  selectedDigit: number;
  selectedChallenge: number;
  selectedOperation: string;
  convertedOperation: string;
  correct: boolean;
  victoryMessage: string;
  challengeLeft: number;

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
        selectedDigit: new FormControl(null,),
        timer: new FormControl(null, ),
        answer: new FormControl(null, ),
      }),
    });
  }

  startTimer() {
    console.log("inside start timer");
    console.log("Digit selected:" + this.selectedDigit);
    console.log("Challenge selected:" + this.selectedChallenge);
    console.log("Operation selected: " + this.selectedOperation)
    this.generateTheNumbers();
    this.convertOperation();
    this.seconds = this.formGroup1.value.gameInformation.timer;
    this.challengeLeft = this.selectedChallenge;
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
        if (this.seconds < 0) { 
          this.seconds = this.formGroup1.value.gameInformation.timer;
          this.victoryMessage = "";
          this.generateTheNumbers();
          this.challengeLeft-=1;
          if(this.challengeLeft == 0) {
            this.myStepper.next();
          }
        } //reset
        this.message = this.seconds+ ' seconds left!';
        this.victoryMessage = "";
      }
    }, 1000);
  }

  public generateTheNumbers() {
    if(this.selectedDigit == 3) {
      this.number1 = Math.floor(Math.random()*(999-100+1)+100);
      this.number2 = Math.floor(Math.random()*(999-100+1)+100);
    } else if(this.selectedDigit == 2) {
      this.number1 = Math.floor(Math.random()*90+10);
      this.number2 = Math.floor(Math.random()*90+10);
    } else {
      this.number1 = Math.floor(Math.random()*10);
      this.number2 = Math.floor(Math.random()*10);
    }
  }

  public convertOperation() {
    if(this.selectedOperation == "Addition") {
      this.convertedOperation = "+";
    } else if(this.selectedOperation == "Subtraction") {
      this.convertedOperation = "-";
    } else if(this.selectedOperation == "Multiplication") {
      this.convertedOperation = "x";
    } else {
      this.convertedOperation = "/";
    }
  }

  public answerButtonClick() {
    this.correct = false;
    if(this.selectedOperation == "Addition") {
      if(this.formGroup1.value.gameInformation.answer == (this.number1+this.number2)) {
        this.correct = true;
      }
    } 
    else if(this.selectedOperation == "Subtraction") {
      if(this.formGroup1.value.gameInformation.answer == (this.number1-this.number2)) {
        this.correct = true;
      }
    } 
    else if(this.selectedOperation == "Multiplication") {
      if(this.formGroup1.value.gameInformation.answer == (this.number1*this.number2)) {
        this.correct = true;
      }
    } 
    else {
      if(this.formGroup1.value.gameInformation.answer == (this.number1/this.number2)) {
        this.correct = true;
      }
    }

    if(this.correct) {
      this.showVictory();
    } else {
      this.victoryMessage = "Not quiete right!"
    }

  }

  public showVictory() {
    this.victoryMessage = "Nice one!";
    this.seconds = 1;
  }

  setIndex = (newIndex: number): void => {
    this.myStepper.selectedIndex = newIndex;
  };

}

export class InstantErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return control && control.invalid && (control.dirty || control.touched);
  }
}
