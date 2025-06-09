/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(`Destination: ${destination}`);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(`New Destination: ${destination}`);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";
console.log(`Travel Date: ${travelDate}`);

// travelDate = "2025-06-08";  // COMMENTED OUT BECAUSE THIS WILL TRIGGER A TYPEERROR
/*
 * Observations:
 * The line above to reassign a new value to the const variable "travelDate" will result in a TypeError.  ("TypeError: Assignment to constant variable.")
 * This is because "const" variable declarations declare a read-only reference to the value, meaning you cannot reassign a new value to a constant
 * after its initial assignment.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(`Time Machine Model: ${timeMachineModel}`);
var timeMachineModel = "T-800";
/*
 * Observations:
 * You would assume when running this, the program would crash with an error like a ReferenceError for trying to access a variable before it's defined; however,
 * upon running Task 4, the program doesn't crash and you will see "Time Machine Model: undefined".  This is because of "Variable Hoisting" in JavaScript,
 * which is a behavior where variable declarations are moved to the top of their scope before code execution. This means that you can use a variable before
 * it's declared, but only the declaration is hoisted, not the initialization.
 *
 * Variables declared with "var" are hoisted to the top of their scope and initialized with undefined. This means you can use the variable before the line
 * where it's declared, but it will have the value undefined until it's assigned a value later in the code.
 *
 * For variables declared with "var", JavaScript treats the code like this:
 *    var timeMachineModel; // "Hoisted" to the top
 *    console.log(`Time Machine Model: ${timeMachineModel}`); // timeMachineModel is declared, but not yet assigned
 *    timeMachineModel = "T-800"; // Now it's assigned
 * So when console.log() runs, the variable exists — it's not undefined in the sense of "missing" — but it has no value yet, so it logs: "Time Machine Model: undefined".
 *
 *
 * On another note, if you tried changing the variable declaration to ues "let" or "const", you would get a ReferenceError as expected;
 * (ReferenceError: Cannot access 'timeMachineModel' before initialization).  This is because variables declared with "let" and "const" are also
 * hoisted to the top of their scope, but they are not initialized.  This period before they're assigned is called the "Temporal Dead Zone (TDZ)" — where
 * the variable exists, but you can't use it yet.  So if you try to access them before the line where they are declared, you will get a ReferenceError.
 */
