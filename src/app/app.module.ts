import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { HomePageComponent } from './quiz/home-page/home-page.component';

var config = {
  apiKey: "AIzaSyA0PmLtYI_QwmHACD2RwCmsi-sjo2UeKGQ",
  authDomain: "quiz-e446b.firebaseapp.com",
  databaseURL: "https://quiz-e446b.firebaseio.com",
  projectId: "quiz-e446b",
  storageBucket: "",
  messagingSenderId: "659699816728",
  appId: "1:659699816728:web:b17bec89ad86fc9d0f666d"
};


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
