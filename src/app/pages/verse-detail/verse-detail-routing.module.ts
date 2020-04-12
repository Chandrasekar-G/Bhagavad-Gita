import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerseDetailPage } from './verse-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VerseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerseDetailPageRoutingModule {}
