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
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap } from "@ngrx/store"
import { CRUDService } from './Services/services';
import { ShowPlayersComponent } from './Components/show-players/show-players.component';
import { QuestionBarComponent } from './Components/question-bar/question-bar.component';
import { GetQuestionAnswerComponent } from './Components/get-question-answer/get-question-answer.component';
import { QuestionListComponent } from './Components/question-list/question-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './reducers/reducer';
import { SubmitTopicComponent } from './Components/submit-topic/submit-topic.component';
import { InfoBarComponent } from './Components/info-bar/info-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    InputPlayersComponent,
    LandingComponent,
    ShowPlayersComponent,
    QuestionBarComponent,
    GetQuestionAnswerComponent,
    QuestionListComponent,
    SubmitTopicComponent,
    InfoBarComponent
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
    MatButtonModule,
    StoreModule.forRoot({myState: AppReducer}as ActionReducerMap<any,any>),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreDevtoolsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
