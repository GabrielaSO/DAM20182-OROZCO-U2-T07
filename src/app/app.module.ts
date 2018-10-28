import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { DetailsPage } from '../pages/details/details';
import { NewTaskModalPage } from '../pages/new-task-modal/new-task-modal';

import { ImagePicker } from '@ionic-native/image-picker';
import { FirebaseService } from '../pages/services/firebase.service';
import { AuthService } from '../pages/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
*/

@NgModule({
  declarations: [
    MyApp,
//    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    NewTaskModalPage,
    DetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    HomePage,
    LoginPage,
    RegisterPage,
    MenuPage,
    NewTaskModalPage,
    DetailsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseService,
    AuthService,
    ImagePicker,
  ]
})
export class AppModule {}
