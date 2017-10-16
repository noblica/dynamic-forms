import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [QuestionService]
})
export class AppComponent {
  questions: Observable<any[]>;

  constructor(service: QuestionService) {
      this.questions = service.getQuestions();
  }
}
