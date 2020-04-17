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
      return (verse.chapter_number === chapterNumber && verse.verse_number === verseNumber);
    });
  }

  getRandomVerse = () => {
    const verseNo = this.getDayOfYear();
    return gitaData.verses[verseNo];
  }

  getDayOfYear = () => {
    const now = new Date().getTime();
    const start = new Date(new Date().getFullYear(), 0, 0).getTime();
    const diff = now - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    return day % gitaData.verses.length;
  }

  getFavoriteVerses = () => {
    const verses = [];
    this.userInfoService.userData.favorites.forEach(verse_id => {
      verses.push(gitaData.verses.find(verse => {
        return verse.verse_id === verse_id;
      }));
    });
    return verses;
  }

}
