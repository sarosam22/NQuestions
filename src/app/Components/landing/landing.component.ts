import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChildActivationStart } from '@angular/router';
import { IPlayer, IQuestion } from 'src/app/Models/interfaces';
import { CRUDService } from 'src/app/Services/services';
import { InputPlayersComponent } from '../input-players/input-players.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: CRUDService) { }

  public players: any
  public question: any
  public questions: any

  ngOnInit(): void {
    const dialogRef = this.dialog.open(InputPlayersComponent);

    dialogRef.afterClosed().subscribe(res => {
      const playerName = res.data
      localStorage.setItem("playerName", playerName)
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
    })

  }

  getQuestions(){
    this.service.getQuestions().subscribe(res => {
      //these are all questions
      this.questions = res
      console.log(this.questions)
    })
  }

  catchQuestion(data:any){
    //this is current question being asked
    this.question = data
  }

}
