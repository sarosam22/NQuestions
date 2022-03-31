import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-submit-topic',
  templateUrl: './submit-topic.component.html',
  styleUrls: ['./submit-topic.component.scss']
})
export class SubmitTopicComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public topicName: string,  
   private dialogRef: MatDialogRef<SubmitTopicComponent>) { }

  topic = new FormControl()

  ngOnInit(): void {
  }

  onSubmit(){
    this.dialogRef.close({data: this.topic.value})
  }

}
