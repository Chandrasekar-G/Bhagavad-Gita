import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AppConstants } from 'src/app/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  userData = null;

  constructor(private storage: Storage) {
  }

  initData = async () => {
    let data = JSON.parse(await this.storage.get(AppConstants.LOCAL_STORAGE.USER_DATA));
    if (!data) {
      data = {
        favorites: [],
        completed: []
      };
      this.storage.set(AppConstants.LOCAL_STORAGE.USER_DATA, JSON.stringify(data));
    }
    this.userData = data;
  }

  checkIfFavorite = (verseId) => {
    return this.userData.favorites.includes(verseId);
  }

  checkIfComplete = (verseId) => {
    return this.userData.completed.includes(verseId);
  }

  markAsFavorite = (verseId) => {
    this.userData.favorites.push(verseId);
    this.storage.set(AppConstants.LOCAL_STORAGE.USER_DATA, JSON.stringify(this.userData));
  }

  removeFromFavorites = (verseId) => {
    const index = this.userData.favorites.indexOf(verseId);
    if (index > -1) {
      this.userData.favorites.splice(index, 1);
    }
    this.storage.set(AppConstants.LOCAL_STORAGE.USER_DATA, JSON.stringify(this.userData));
  }

  markAsComplete = (verseId) => {
    this.userData.completed.push(verseId);
    this.storage.set(AppConstants.LOCAL_STORAGE.USER_DATA, JSON.stringify(this.userData));
  }

  removeFromComplete = (verseId) => {
    const index = this.userData.completed.indexOf(verseId);
    if (index > -1) {
      this.userData.completed.splice(index, 1);
    }
    this.storage.set(AppConstants.LOCAL_STORAGE.USER_DATA, JSON.stringify(this.userData));
  }
}
