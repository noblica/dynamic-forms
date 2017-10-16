import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { QuestionBase } from './dynamic-form/question-base';
import { TextboxQuestion } from './dynamic-form/question-textbox';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {
    constructor(private http: HttpClient) {}

    getQuestions() {

        return this.http
            .get<any[]>('http://localhost:3000/questions')
            .map(result => result.map(question => new TextboxQuestion(question)));
            // .map(result => {
            //     return Array(result).map(question => new TextboxQuestion(question));
            // });

        // const questions: QuestionBase<any>[] = [
        //
        //     new DropdownQuestion({
        //         key: 'brave',
        //         label: 'Bravery Rating',
        //         options: [
        //             {key: 'solid', value: 'Solid'},
        //             {key: 'great', value: 'Great'},
        //             {key: 'good', value: 'Good'},
        //             {key: 'unproven', value: 'Unproven'},
        //         ],
        //         order: 3,
        //     }),
        //
        //     new TextboxQuestion({
        //         key: 'firstName',
        //         label: 'First Name',
        //         value: 'Bombasto',
        //         required: true,
        //         order: 1
        //     }),
        //
        //     new TextboxQuestion({
        //         key: 'emailAddress',
        //         label: 'Email',
        //         type: 'email',
        //         order: 2
        //     })
        // ];
        //
        // return questions.sort((a, b) => a.order - b.order);
    }
}
