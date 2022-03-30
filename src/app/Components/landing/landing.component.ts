import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IPlayer } from 'src/app/Models/player';
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
  }

  getPlayers() {
    this.service.getPlayers().subscribe(res => {
        this.players = res
    })

  }

}
