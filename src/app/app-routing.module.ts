import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
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
import { TitleCreditsComponent } from './title-credits/title-credits.component';
const routes: Route[] = [

  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome' , component: WelcomeComponent},
  {path: 'chapter-one', component: ChapterOneComponent},
  {path: 'chapter-two', component: ChapterTwoComponent},
  {path: 'chapter-three', component: ChapterThreeComponent},
  {path: 'chapter-four', component: ChapterFourComponent},
  {path: 'chapter-five', component: ChapterFiveComponent},
  {path: 'chapter-six', component: ChapterSixComponent},
  {path: 'chapter-seven', component: ChapterSevenComponent},
  {path: 'chapter-eight', component: ChapterEightComponent},
  {path: 'chapter-nine', component: ChapterNineComponent},
  {path: 'title-credits', component: TitleCreditsComponent},

  {path: '**', component: WelcomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
