/**
 * Calculates the Mars Climate Orbiter thruster amount. Note that the provided value needs to be newton-seconds, and not pounds-seconds 
 * 
 * @param {object} props
 * @param {number} props.time - Time as measured in seconds
 * @param {object} props.force
 * @param {number} props.force.value - Force as measured in newton-seconds
 * @param {'newton-seconds'} props.force.measurement
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

    if (measurement !== 'newton-seconds') {
        throw new Error(`"measurement" is required to be "newtons-seconds", it is currently ${measurement}`);
    };

    return value * time;
};

const thurst = calcThrust({
    time: 10,
    force: {
        value: 50,
        measurement: 'newton-seconds'
    }
});
/*
const thurst = calcThrust({
    time: 10,
    force: {
        value: 50,
        measurement: 'newton-seconds'
    }
})


*/

console.log(thurst);