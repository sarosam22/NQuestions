import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-show-players',
  templateUrl: './show-players.component.html',
  styleUrls: ['./show-players.component.scss']
})
export class ShowPlayersComponent implements OnInit {

  constructor() { }

  @Input() players: any
  public isCurrentAsker: any

  ngOnInit(): void {
    
  }

  generateRandomColor(){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16)
    return randomColor
}

}
