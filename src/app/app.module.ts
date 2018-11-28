import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { ChapterFourComponent } from './chapter-four/chapter-four.component';
import { ChapterFiveComponent } from './chapter-five/chapter-five.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component';
import { ChapterSevenComponent } from './chapter-seven/chapter-seven.component';
import { ChapterEightComponent } from './chapter-eight/chapter-eight.component';
import { ChapterNineComponent } from './chapter-nine/chapter-nine.component';
import { CardComponent } from './card/card.component';
import { TitleCreditsComponent } from './title-credits/title-credits.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WelcomeComponent,
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent,
    ChapterFourComponent,
    ChapterFiveComponent,
    ChapterSixComponent,
    ChapterSevenComponent,
    ChapterEightComponent,
    ChapterNineComponent,
    CardComponent,
    TitleCreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
