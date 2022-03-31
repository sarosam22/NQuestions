import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitTopicComponent } from './submit-topic.component';

describe('SubmitTopicComponent', () => {
  let component: SubmitTopicComponent;
  let fixture: ComponentFixture<SubmitTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
