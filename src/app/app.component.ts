// app.component.ts
// main app component declaration
// -------------------------------------------------------------------------------------------------

// importing 3rd party modules
import { Component } from '@angular/core';

// ionic modules
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// creating the angular component
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    // initializing the app
    this.initializeApp();
  }

  /**
   * Initializes the app
   *
   * @memberof AppComponent
   */
  initializeApp() {
    this.platform.ready().then(() => {
      // ionic platform is ready, plugin configuration should go here
      this.splashScreen.hide();
      this.statusBar.styleDefault();
    });
  }
}
