import { Injectable } from '@angular/core';
import { UserInfoService } from '../user-info/user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor(
    private userInfoService: UserInfoService
  ) { }

  initApp = async () => {
    await this.userInfoService.initData();
  }
}
