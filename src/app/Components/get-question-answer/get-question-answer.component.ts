import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRUDService } from 'src/app/Services/services';

@Component({
  selector: 'app-get-question-answer',
  templateUrl: './get-question-answer.component.html',
  styleUrls: ['./get-question-answer.component.scss']
})
export class GetQuestionAnswerComponent implements OnInit {


  @Input() question: any
  @Output("updateAsker") updateAsker: EventEmitter<any> = new EventEmitter();
  constructor(private service: CRUDService) { }

  ngOnInit(): void {
  }

  addQuestionAnswer(answer:string){
    this.service.addQuestion({body: this.question.question,askedBy:this.question.askedBy, response: answer})
    .then(res => {

      this.updateAsker.emit();
    })
  }

}
