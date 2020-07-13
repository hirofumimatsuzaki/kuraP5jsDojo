import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: '基本的な形',
      url: '/form',
      icon: 'checkbox'
    },
    {
      title: '変数',
      url: '/folder/変数',
      icon: 'checkbox'
    },
    {
      title: '繰り返し',
      url: '/folder/繰り返し',
      icon: 'checkbox-outline'
    },
    {
      title: 'setup()とdraw()',
      url: '/folder/setup()とdraw()',
      icon: 'checkbox-outline'
    },
    {
      title: 'インタラクション',
      url: '/folder/インタラクション',
      icon: 'checkbox-outline'
    },
    {
      title: '画像を読み込む',
      url: '/folder/画像を読み込む',
      icon: 'checkbox-outline'
    },
    {
      title: 'フォント',
      url: '/folder/フォント',
      icon: 'checkbox'
    },
    {
      title: '動き',
      url: '/folder/動き',
      icon: 'checkbox-outline'
    },
    {
      title: 'ランダム',
      url: '/folder/ランダム',
      icon: 'checkbox-outline'
    },
    {
      title: '円運動',
      url: '/folder/円運動',
      icon: 'checkbox-outline'
    },
    {
      title: '位置の変更',
      url: '/folder/位置の変更',
      icon: 'checkbox-outline'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

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
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
