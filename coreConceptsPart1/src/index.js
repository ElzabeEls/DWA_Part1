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
    alert: getHTML("alert"),
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

/**
 * @type {data}
 */
const data = {
    intensity: "low",
    mode: "wide",
    locked: true
};

const lockFunction = () => {
    if (data.locked) throw new Error('Already locked');
    data.locked = true;

    return () => {
        data.locked = false;
    }
}

const toggleMode = () => {
    try {
        const unlock = lockFunction();
        //...
        setTimeout(
            () => {
                const newMode = data.mode === 'wide' ? "focus" : "wide";
                data.mode = newMode;
                html.mode.display.innerText = newMode;
                unlock();
            },
            2000
        );
    } catch (error) {
        html.alert.innerText = `Operation could not be performed, 
        since another operation is currently in progress. 
        Please try again in a few seconds. (${error.message})`;

        const interval = setInterval(
            () => {
                if (!data.locked) {
                    html.alert.innerText = '';
                    clearInterval(interval);
                }
            },
            1000
        );
    }
}

const toggleIntensity = () => {
    try {
        const unlock = lockFunction();
        //...
        const newIntensity = data.intensity === 'low' ? "high" : "low";
        data.intensity = newIntensity;
        html.intensity.display.innerText = newIntensity;
        unlock();
    } catch (error) {
        html.alert.innerText = `Operation could not be performed, 
        since another operation is currently in progress. 
        Please try again in a few seconds. (${error.message})`;

        const interval = setInterval(
            () => {
                if (!data.locked) {
                    html.alert.innerText = '';
                    clearInterval(interval);
                }
            },
            1000
        );
    }
};

html.intensity.button.addEventListener("click", toggleIntensity);
html.mode.button.addEventListener("click", toggleMode);

window.addEventListener('error', () => {
    document.body.innerHTML = /* html */ `
   Something critical went wrong on our side. Please restart and try again. 
   If the issue persists please contact support.
`;
});

html.intensity.display.innerText = data.intensity;
html.mode.display.innerText = data.mode;
data.locked = false;

//next example ABSTRACTION:
