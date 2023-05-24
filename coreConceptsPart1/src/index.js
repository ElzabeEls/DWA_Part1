// @ts-check

import {state} from './state.js';

console.log("It works");

state.tasks['khgjhjgghgjgh'] = {
    completed: false,
    id: 'khgjhjgghgjgh',
    created: new Date('1/1/2023'),
    due: new Date('1/2/2023'),
    title: 'Eat food',
    urgency: 'low',
};
