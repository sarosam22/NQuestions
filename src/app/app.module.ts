import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputPlayersComponent } from './Components/input-players/input-players.component';
import { LandingComponent } from './Components/landing/landing.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CRUDService } from './Services/services';
import { ShowPlayersComponent } from './Components/show-players/show-players.component';
import { QuestionBarComponent } from './Components/question-bar/question-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    InputPlayersComponent,
    LandingComponent,
    ShowPlayersComponent,
    QuestionBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
