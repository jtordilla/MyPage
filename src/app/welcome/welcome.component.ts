import { Component, OnInit, Input } from '@angular/core';
import { transitiveScopesFor } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title: string;

  constructor() { }

  ngOnInit() {
    this.title = "MyPage"
  }

}
