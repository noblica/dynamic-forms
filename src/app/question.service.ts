import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownQuestion } from './dynamic-form/question-dropdown';
import { TextboxQuestion } from './dynamic-form/question-textbox';
import 'rxjs/add/operator/map';

import { questions } from './dynamic-form/question-metadata';

@Injectable()
export class QuestionService {
    constructor(private http: HttpClient) {}

    getObjectWithKey(array, key) {
        return array
            .find(field => field.key === key);
    }

    mapValueToKey(key, value, formFieldArray) {
        const correspondingField = this.getObjectWithKey(formFieldArray, key);
        correspondingField.value = value;
        return correspondingField;
    }

    getQuestions() {

        const formFieldArray = [...questions];

        return this.http
            .get<any[]>('http://localhost:3000/questions/0')
            .map(result => {
                const resultKeys = Object.keys(result)
                    .filter(key => key !== 'id');

                return resultKeys.map(key =>
                    this.mapValueToKey(key, result[key], formFieldArray));
            })
            .map(result => result.map(question => {
                    switch (question.controlType) {
                        case 'text':
                            return new TextboxQuestion(question);
                        case 'dropdown':
                            return new DropdownQuestion(question);
                    }
                })
            )
            .map(questionArray => questionArray.sort((a, b) => a.order - b.order));
    }
}
