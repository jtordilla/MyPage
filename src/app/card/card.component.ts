import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title: string;
  summary: string;

  constructor() { }

  ngOnInit() {
    this.title = "Credits"
    this.summary = "Click below to view";
  }

}
