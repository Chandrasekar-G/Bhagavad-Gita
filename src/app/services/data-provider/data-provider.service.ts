import { Injectable } from '@angular/core';
import gitaData from '../../data/data';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {


  constructor(
    private userInfoService: UserInfoService
  ) {
  }

  getAllChapters = () => {
    return gitaData.chapters;
  }

  getChapterDetails = (chapterNumber) => {
    return gitaData.chapters.filter(chapter => {
      return chapter.chapter_number === chapterNumber;
    })[0];
  }

  getVerses = (chapterNumber) => {
    return gitaData.verses.filter(verse => {
      return verse.chapter_number === chapterNumber;
    });
  }

  getVerse = (chapterNumber, verseNumber) => {
    return gitaData.verses.find(verse => {
      return (verse.chapter_number === chapterNumber && parseInt(verse.verse_number, 10) === verseNumber);
    });
  }

  getRandomVerse = () => {
    const verseNo = this.getDayOfYear();
    return gitaData.verses[verseNo];
  }

  getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day % gitaData.verses.length;
  }

}
