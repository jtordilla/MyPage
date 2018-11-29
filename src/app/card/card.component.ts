import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  title: string;
  summary: string;

  constructor() { }

  ngOnInit() {
    this.title = "Credits"
    this.summary = "Click the button to view"
  }

}
