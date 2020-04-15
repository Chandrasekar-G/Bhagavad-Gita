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
    })
  }

}
