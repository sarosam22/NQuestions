import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-question-bar',
  templateUrl: './question-bar.component.html',
  styleUrls: ['./question-bar.component.scss']
})
export class QuestionBarComponent implements OnInit {


  @Output()
  questionSubmittedEmitter: EventEmitter<any> = new EventEmitter<any>();


  @Output("updateAsker") updateAsker: EventEmitter<any> = new EventEmitter();
  constructor() { }

  question = new FormControl()

  ngOnInit(): void {
  }

  questionSubmitted(){
    if (this.question.value){
      this.questionSubmittedEmitter.emit({question: this.question.value, askedBy: ''})
      this.question.reset();
      //this.question.disable();
    }

    //this.updateAsker.emit()

  }

}
