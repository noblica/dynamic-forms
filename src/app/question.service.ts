import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { TextboxQuestion } from './dynamic-form/question-textbox';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {
    constructor(private http: HttpClient) {}

    getQuestions() {

        return this.http
            .get<any[]>('http://localhost:3000/questions')
            .map(result => result.map(question => {
                switch (question.controlType) {
                    case 'text':
                        return new TextboxQuestion(question);
                    case 'dropdown':
                        return new DropdownQuestion(question);
                }
            }))
            .map(questionArray => questionArray.sort((a, b) => a.order - b.order));
    }
}
