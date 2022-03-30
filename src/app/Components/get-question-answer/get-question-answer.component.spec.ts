import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetQuestionAnswerComponent } from './get-question-answer.component';

describe('GetQuestionAnswerComponent', () => {
  let component: GetQuestionAnswerComponent;
  let fixture: ComponentFixture<GetQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetQuestionAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
