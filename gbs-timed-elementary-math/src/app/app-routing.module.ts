import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ImportanceComponent } from './importance/importance.component';
import { MathgameComponent } from './mathgame/mathgame.component';

const routes: Routes = [
  { 
    path: '', 
    component: FrontpageComponent,
  },
  {
    path: 'description-page',
    component: DescriptionComponent,
  },
  {
    path: 'importance-page',
    component: ImportanceComponent,
  },
  {
    path: 'mathgame-page',
    component: MathgameComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
