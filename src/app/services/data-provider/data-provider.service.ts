import { Injectable } from '@angular/core';
import gitaData from '../../data/data';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  userLanguage;

  constructor(
    private userInfoService: UserInfoService
  ) {
    this.listenToLanguageChange();
  }

  listenToLanguageChange = () => {
    this.userInfoService.getUserLanguage().subscribe(lang => {
      this.userLanguage = lang;
    });
  }

  getAllChapters = () => {
    return gitaData.chapters[this.userLanguage];
  }

  getVerses = (chapterNumber) => {
    return gitaData.verses[this.userLanguage].filter(verse => {
      return verse.chapter_number === chapterNumber;
    });
  }

  getVerse = (chapterNumber, verseNumber) => {
    return gitaData.verses[this.userLanguage].find(verse => {
      return (verse.chapter_number === chapterNumber && parseInt(verse.verse_number, 10) === verseNumber);
    })
  }

}
