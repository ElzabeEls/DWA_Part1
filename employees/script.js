/*
SOLID
Single Responsibility Principle (SRP): This principle states that a class or module should
have only one reason to change. To apply SRP in JavaScript, you can create separate modules
or classes that handle specific tasks or responsibilities. Each module or class should be
responsible for a single functionality or feature, and should not be coupled with other
functionalities.

Open-Closed Principle (OCP): This principle states that software entities
(classes, modules, functions, etc.) should be open for extension but closed for modification.
 In JavaScript, you can apply this principle by creating abstract classes or interfaces that
  define a set of methods or properties. Concrete classes can then inherit from these abstract
  classes or interfaces and implement their methods. This way, you can add new functionalities
  without modifying existing code.

Liskov Substitution Principle (LSP): This principle states that objects of a superclass should
be replaceable with objects of a subclass without affecting the correctness of the program.
In JavaScript, you can implement LSP by ensuring that subclasses inherit all the properties
and methods of their superclass, and do not alter their behaviour in unexpected ways.

Interface Segregation Principle (ISP): This principle states that a client should not be forced
to depend on methods it does not use. In JavaScript, you can apply ISP by creating small,
focused interfaces that define only the methods that a client needs. This way, you can avoid
creating large, bloated interfaces that are difficult to maintain and understand.

Dependency Inversion Principle (DIP): This principle states that high-level modules should not
depend on low-level modules. Instead, both should depend on abstractions. In JavaScript, you can
implement DIP by using dependency injection, which allows you to pass dependencies to a module or
class rather than creating them inside. This way, you can decouple modules and make them more
reusable and testable.
*/

// @ts-check

/**
 * @callback invite
 * @returns {string}
 */

/**
 * @typedef {object} Employee
 * @prop {string} id
 * @prop {string} name
 * @prop {string} company
 * @prop {Date} created
 * @prop {invite} invite - ...
 */
// Shorthand way to define function @prop {() => string} sendInvite

/**
 * @param {string} name - The legal name of the employee as appearing on their ID
 * @return {Employee}
 */

const createEmployee = (name, company) => {
  const id = new Date().getTime().toString();

  return {
    id,
    name,
    company,
    created: new Date(),
    invite: () => 'Not required',
  };
};

/**
   * @param {string} name - The legal name of the employee as appearing on their ID
   * @return {Employee}
   */
const createColleage = (name) => {
  const employee = createEmployee(name, 'Codespace');

  employee.invite = () => {
    const answer = window.prompt(`Is ${name} attending?`);

    if (!answer || answer.trim() === '') {
      throw new Error('Answer can not be empty');
    }
    return answer;
  };
  return employee;
};

/**
   * @param {string} name - The legal name of the employee as appearing on their ID
   * @return {Employee}
   */
const createStudent = (name) => {
  const employee = createEmployee(name, 'Codespace');

  employee.invite = () => 'No';

  return employee;
};

/**
   * @param {string} name - The legal name of the employee as appearing on their ID
   * @return {Employee}
   */
const createInspector = (name) => {
  const employee = createEmployee(name, 'South African Government');
  employee.invite = () => 'Awaiting response';
  return employee;
};

/**
   * Open-Closed Principle (OCP): This principle states that software entities
   * (classes, modules, functions, etc.) should be open for extension but closed for modification.
   * In JavaScript, you can apply this principle by creating abstract classes or interfaces that
   * define a set of methods or properties. Concrete classes can then inherit from these
   * abstract classes or interfaces and implement their methods. This way, you can add
   * new functionalities without modifying existing code.
   *
   * Liskov Substitution Principle (LSP): This principle states that objects of a superclass
   * should be replaceable with objects of a subclass without affecting the correctness of
   * the program. In JavaScript, you can implement LSP by ensuring that subclasses inherit all
   * the properties and methods of their superclass, and do not alter their behaviour
   * in unexpected ways.
   */

/**
   *
   */
const calcResponse = () => { };

/**
   *
   * @param {object} props
   * @param {string} props.title
   * @param {Array<Employee>} props.attendees
   * @returns
   */
const createEvent = (props) => {
  const { attendees, title } = props;
  const response = {};

  for (const { name: attendeeName, invite } of attendees) {
    response[attendeeName] = invite();
  }

  return {
    title,
    attendees,
    date: new Date(),
    completed: false,
    response,
  };
};

const eventInstance = createEvent({
  title: 'Annual 2051 Inspection',
  attendees: [
    createColleage('Schalk Venter'),
    createColleage('Renzo van Wyk'),
    createInspector('Mr Big Boss'),
    createEmployee('John Smith', 'Woolworths'),
    createEmployee('Sipho Thambo', 'Google'),
    createStudent('Sam Smith'),
  ],
});

console.log(eventInstance);
