// @ts-check

import { state } from './state.js';

console.log("It works");

state.tasks['khgjhjgghgjgh'] = {
    completed: false,
    id: 'khgjhjgghgjgh',
    created: new Date('1/1/2023'),
    due: new Date('1/2/2023'),
    title: 'Eat food',
    urgency: 'low',
};


// next example
/**
 * 
 * @param {string} label 
 * @returns {HTMLElement}
 */
const getHTML = (label) => {
    const node = document.querySelector(`[data-${label}]`);

    if (!(node instanceof HTMLElement)) {
        throw new Error(
            "[data-${label}] was not found in HTML"
        )
    };

    return node;
}

const html = {
    mode: {
        display: getHTML('mode-display'),
        button: getHTML('mode-button')
    },

    intensity: {
        display: getHTML('intensity-display'),
        button: getHTML('intensity-button')
    }
};

/**
 * @typedef {object} data 
 * @prop {'low' | 'high'} intensity
 * @prop {'wide' | 'focus'} mode
 * @prop {boolean} locked
 */

const data = {
    intensity: "low",
    mode: "wide",
    locked: false
};

const toggleIntensity= () => {};
const toggleMode = () => {};


modeHtml.addEventListener("click", () => { });
intensityHtml.addEventListener("click", () => { });


const lockFunction = () => {
    if (locked) throw new Error('Already locked');
    locked = true;

    return () => {
        locked = false;
    }
}

const toggleMode = () => {
    const unlock = lockFunction();
    //...
    setTimeout(() => {
        unlock();
    }, 2000)
}

const changeAmount = () => {
    if (locked) throw new Error('Mode is being changed');
    locked = true;
    //...
    locked = false;
}

toggleMode();
changeAmount();