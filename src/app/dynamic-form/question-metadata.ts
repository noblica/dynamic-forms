export const questions = [
    {
        key: 'brave',
        label: 'Bravery Rating',
        options: [
            {key: 'solid', value: 'Solid'},
            {key: 'great', value: 'Great'},
            {key: 'good', value: 'Good'},
            {key: 'unproven', value: 'Unproven'}
        ],
        order: 3,
        value: '',
        controlType: 'dropdown'
    },
    {
        key: 'firstName',
        label: 'First Name',
        value: 'Bombasto',
        required: true,
        order: 1,
        controlType: 'text'
    },
    {
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        value: '',
        controlType: 'text'
    }
];
