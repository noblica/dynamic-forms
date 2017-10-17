import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { TextboxQuestion } from './dynamic-form/question-textbox';
import 'rxjs/add/operator/map';

import { questions } from './dynamic-form/question-metadata';

@Injectable()
export class QuestionService {
    constructor(private http: HttpClient) {}

    static getKeysWithoutId(array) {
        return Object.keys(array)
            .filter(key => key !== 'id');
    }

    getQuestions() {

        const formConfig = [...questions];

        return this.http
            .get<any[]>('http://localhost:3000/questions/0')
            .map(result => {
                const resultKeys = QuestionService.getKeysWithoutId(result);

                return formConfig.map(fieldConfig => {
                    const keyHasValue = resultKeys.indexOf(fieldConfig.key) !== -1;

                    if (keyHasValue) {
                        fieldConfig.value = result[fieldConfig.key];
                    }
                    return fieldConfig;
                });
            })
            .map(result => result.map(question => {
                    switch (question.controlType) {
                        case 'textbox':
                            return new TextboxQuestion(question);
                        case 'dropdown':
                            return new DropdownQuestion(question);
                    }
                })
            )
            .map(questionArray => questionArray.sort((a, b) => a.order - b.order));
    }
}
