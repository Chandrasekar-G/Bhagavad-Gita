import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
const { LocalNotifications } = Plugins;



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Chapters',
      url: 'chapters',
      icon: 'book'
    },
    {
      title: 'Favorites',
      url: 'favorites',
      icon: 'heart'
    },
    {
      title: 'Progress',
      url: 'progress',
      icon: 'bicycle'
    },
    {
      title: 'Verse of the day',
      url: 'verse-of-the-day',
      icon: 'calendar'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.scheduleNotifications();
    });
  }

  scheduleNotifications = async () => {
    const notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Bhagavad Gita',
          body: 'Start your day with a verse from the Gita',
          id: 1,
          schedule: {
            every: 'day',
            on: {
              hour: 6,
              minute: 0
            }
          },
          // schedule: { at: new Date(Date.now() + 1000 * 5) },
          sound: null,
          attachments: null,
          actionTypeId: '',
          extra: 'verse of the day show'
        }
      ]
    });
    // LocalNotifications.addListener('localNotificationReceived', (notification) => {
    //   console.log(notification);
    //   alert(notification);
    // });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
