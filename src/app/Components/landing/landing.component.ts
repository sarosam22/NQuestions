import { Component, OnInit, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChildActivationStart } from '@angular/router';
import { IAppState, IPlayer, IQuestion } from 'src/app/Models/interfaces';
import { CRUDService } from 'src/app/Services/services';
import { Store } from "@ngrx/store"
import { InputPlayersComponent } from '../input-players/input-players.component';
import * as Actions from '../../actions/actions'
import { SubmitTopicComponent } from '../submit-topic/submit-topic.component';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: CRUDService, 
    private store:Store<IAppState>) { }

  public gameStarted: boolean = false;
  public players: any
  public question: any
  public questions: any
  public playerNames: any = []
  public initialState: IAppState = <IAppState>{
    players: [],
    gameStart: true,
    upcomingInquirer: '',
    currentAsker: '',
    upcomingAsker: ''

  }

  public askerNames: any = []

  public isCurrentAsker: boolean = false;
  public isCurrentInquirer: boolean = false;




  ngOnInit(): void {
    const dialogRefPlayerInput = this.dialog.open(InputPlayersComponent);

    dialogRefPlayerInput.afterClosed().subscribe(res => {
      const playerName = res.data
      //this.store.dispatch(new Actions.SetPlayer(playerName));
      localStorage.setItem("thisPlayer", playerName);
      this.service.addPlayer({Name: playerName})
      .then(res => {
        console.log("Player successfully added!")
      })
    })

    this.getPlayers()
    this.getQuestions()
  }

  getPlayers() {
    this.service.getPlayers().subscribe(res => {
        this.players = res
        this.players.forEach((el:any) => {
          this.playerNames = Object.assign([], this.playerNames);
          if(this.playerNames.indexOf(el.payload.doc.data().Name) == -1){
            this.playerNames.push(el.payload.doc.data().Name)
          }
          this.initialState.players = this.playerNames
          
        });
        //this.store.dispatch(new Actions.AddPlayers(this.playerNames))
    })

  }

  getQuestions(){
    this.service.getQuestions().subscribe(res => {
      //these are all questions
      this.questions = res
    })
  }

  catchQuestion(data:any){
    //this is current question being asked
    this.question = data
  }


  setInitialState(state:IAppState){
    this.service.addInitialState(state)
    .then(res => {
      console.log(res)
    })
  }


  

  startGame(){
    let randomInitialInquirer, randomInitialAsker
    if (this.initialState.players?.length){
      this.initialState.currentInquirer = this.initialState.players[Math.floor(Math.random()*this.initialState.players.length)];
      this.isCurrentInquirer = this.initialState.currentInquirer === localStorage.getItem("thisPlayer");
      this.askerNames = this.playerNames.filter((value:any) => {
        return value !== this.initialState.currentInquirer
      })
      console.log(this.askerNames)
      this.initialState.currentAsker = this.askerNames[Math.floor(Math.random()*this.askerNames.length)]
      console.log(this.initialState.currentAsker)
    }

    this.setInitialState(this.initialState);
    //console.log(this.initialState)

    //open dialog for currentAsker to input topic if active user is current inquirer

    if (localStorage.getItem("thisPlayer") === this.initialState.currentInquirer){
      const dialogRefTopicInput = this.dialog.open(SubmitTopicComponent);

      dialogRefTopicInput.afterClosed().subscribe(res => {
        const topic = res.data
        //this.store.dispatch(new Actions.SetPlayer(playerName));
        localStorage.setItem("currentTopic", topic)
      })
    }
 
    this.gameStarted = true

  }


  updateAsker(){

    if (this.initialState && this.initialState.currentAsker){
      console.log(this.initialState.currentAsker)
      let letIndexAsker = this.askerNames.indexOf(this.initialState.currentAsker)
      let nextIndex = letIndexAsker + 1
      this.initialState.currentAsker = this.askerNames[nextIndex]
    }

    this.service.getCurrentState().subscribe(res => {
    })
    this.service.updateStateonAskerChange(this.initialState);
    this.service.getCurrentState().subscribe(res => {
      this.initialState = <IAppState>res[0].payload.doc.data()
      this.isCurrentAsker = this.initialState.currentAsker === localStorage.getItem('thisPlayer');
    })
    


  }
}
