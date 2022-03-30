import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {


  @Input() questions: any
  constructor() { }

  ngOnInit(): void {
  }

}
