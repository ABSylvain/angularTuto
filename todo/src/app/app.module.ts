import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBrD6VOrbXGu19aCoHMJ5Avg_UKs6SvTgg",
  authDomain: "todotest-dde19.firebaseapp.com",
  databaseURL: "https://todotest-dde19.firebaseio.com",
  projectId: "todotest-dde19",
  storageBucket: "",
  messagingSenderId: "762015163975"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }