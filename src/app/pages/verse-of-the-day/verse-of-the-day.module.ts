import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerseOfTheDayPageRoutingModule } from './verse-of-the-day-routing.module';

import { VerseOfTheDayPage } from './verse-of-the-day.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VerseOfTheDayPageRoutingModule
  ],
  declarations: [VerseOfTheDayPage]
})
export class VerseOfTheDayPageModule {}
