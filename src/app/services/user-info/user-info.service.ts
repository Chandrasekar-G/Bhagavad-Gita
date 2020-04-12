import { Injectable } from '@angular/core';
import { LANGUAGES } from '../../constants/app-constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userLanguage = LANGUAGES.ENGLISH;
  private UserLanguage = new BehaviorSubject(this.userLanguage);

  constructor() { }

  getUserLanguage = () => {
    return this.UserLanguage.asObservable();
  }


}
