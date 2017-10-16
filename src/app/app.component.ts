import {
    Component,
    OnInit
} from '@angular/core';
import { QuestionService } from './question.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [QuestionService]
})
export class AppComponent implements OnInit {
  questions: Observable<any[]>;

  constructor(private service: QuestionService) { }

  ngOnInit() {
      this.questions = this.service.getQuestions().startWith([]);
  }
}
