import {
    Component,
    Input,
    OnInit,
    OnChanges
} from '@angular/core';
import {
    FormGroup
} from '@angular/forms';

import { QuestionBase } from './question-base';
import { QuestionControlService } from './question-control.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnChanges {
    @Input() questions;
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) {
        this.questions = [];
    }

    ngOnChanges() {
        this.form = this.qcs.toFormGroup(this.questions || []);
    }

    // ngOnInit() {
    //     this.questions = [];
    // }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
