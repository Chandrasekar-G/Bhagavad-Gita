import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerseDetailPageRoutingModule } from './verse-detail-routing.module';

import { VerseDetailPage } from './verse-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VerseDetailPageRoutingModule
  ],
  declarations: [VerseDetailPage]
})
export class VerseDetailPageModule {}
