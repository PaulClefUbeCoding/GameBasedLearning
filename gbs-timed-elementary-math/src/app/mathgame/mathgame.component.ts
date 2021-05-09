import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mathgame',
  templateUrl: './mathgame.component.html',
  styleUrls: ['./mathgame.component.css']
})
export class MathgameComponent implements OnInit {

  title: string;
  public isViewable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.title = "Chasing Tiger";
    this.isViewable = true;
  }

  public toggle(): void {
    this.isViewable = !this.isViewable;
  }

}
