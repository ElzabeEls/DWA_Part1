// @ts-check

const CONVERSION_FACTOR = 4.44822;

/**
 * Calculates the Mars Climate Orbiter thruster amount. Note that the provided value needs to be either newton-seconds or pounds-seconds (The conversion will happen automatically).
 * 
 * @param {object} props
 * @param {number} props.time - Time as measured in seconds
 * @param {object} props.force
 * @param {number} props.force.value - Force as measured in newton-seconds
 * @param {'newton-seconds' | 'pound-seconds'} props.force.measurement
 * @returns {number}
 */

const calcThrust = (props) => {
    if (!props) throw new Error('"props" is required');

    const { force, time } = props;
    const { value, measurement } = force;

    if (!force) throw new Error('"force" is required');
    if (!time) throw new Error('"time" is required');
    if (!value) throw new Error('"value" is required');
    if (!measurement) throw new Error('"measurement" is required');

    if (!['newton-seconds', 'pound-seconds'].includes(measurement)) {
        throw new Error(`"measurement" is required to be "newton-seconds" or "pound-seconds", it is currently ${measurement}`);
    };

    const valueAsNewtonSeconds = measurement === 'newton-seconds' ?
        value :
        value * CONVERSION_FACTOR;
    return valueAsNewtonSeconds * time;
};

const thurst = calcThrust({
    time: 10,
    force: {
        value: 50,
        measurement: 'pound-seconds'
    }
});

console.log(thurst);