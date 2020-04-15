import { Component, OnInit } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component({
  selector: 'bg-verse-of-the-day',
  templateUrl: './verse-of-the-day.page.html',
  styleUrls: ['./verse-of-the-day.page.scss'],
})
export class VerseOfTheDayPage implements OnInit {

  verse = null;
  chapter = null;

  constructor(
    private dataProviderService: DataProviderService
  ) { }

  ngOnInit() {
    this.getRandomVerse();
    this.getChapter();
  }

  getRandomVerse = () => {
    this.verse = this.dataProviderService.getRandomVerse();
  }

  getChapter = () => {
    this.chapter = this.dataProviderService.getChapterDetails(this.verse.chapter_number);
  }

}
