import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseOfTheDayPage } from './verse-of-the-day.page';

const routes: Routes = [
  {
    path: '',
    component: VerseOfTheDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerseOfTheDayPageRoutingModule {}
