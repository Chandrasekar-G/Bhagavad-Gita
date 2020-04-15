import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CommonHeaderComponent } from '../components/common-header/common-header.component';
import { ChapterCardComponent } from '../components/chapter-card/chapter-card.component';
import { VerseCardComponent } from '../components/verse-card/verse-card.component';
import { VerseDetailCardComponent } from '../components/verse-detail-card/verse-detail-card.component';
import { LineBreakComponent } from '../components/line-break/line-break.component';

@NgModule({
  declarations: [
    CommonHeaderComponent,
    ChapterCardComponent,
    VerseCardComponent,
    VerseDetailCardComponent,
    LineBreakComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    CommonHeaderComponent,
    ChapterCardComponent,
    VerseCardComponent,
    VerseDetailCardComponent,
    LineBreakComponent
  ]
})
export class SharedModule { }
