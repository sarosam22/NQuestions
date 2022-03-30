import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CRUDService } from 'src/app/Services/services';


@Component({
  selector: 'app-input-players',
  templateUrl: './input-players.component.html',
  styleUrls: ['./input-players.component.scss']
})
export class InputPlayersComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public playerName: string,
  private service: CRUDService,
  private dialogRef: MatDialogRef<InputPlayersComponent>) { }

  name = new FormControl()

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close({data: this.name.value})
  }

}
