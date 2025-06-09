# Exercise-8.8-Variable-Hoisting

Springboard SE Bootcamp - Exercise for Section 8.8 - Variable Hoisting

Exercise Link: https://lessons.springboard.com/Hoisting-Exercise-fdb595e8d5c8403e9110802247695dbb

This exercise illustrates the concept of "Variable Hoisting". While interacting with the code, you can play with declaring variables with "let", "const", and "var".

## How to run the code

Run `cd variable-hoisting-code`, then `node time-travel.js`

## To summarize usage (based on Task 4):

- var variables are hoisted — declared at the top, but initialized later.
- So you can reference them before assignment, but you'll get undefined.
- Use let or const to avoid confusing behavior like this.

## Summarizing Usage of "let", "const", and "var":

- const – Use when the variable should not be reassigned (default choice). It's block-scoped, cannot be redeclared, and cannot be reassigned.
- let – Use when the variable will change later (e.g. in loops or reassignments). It's block-scoped, cannot be redeclared, but can be reassigned.
- var – Avoid using in modern JavaScript; it's hoisted in a confusing way and has function scope. It can be redeclared and reassigned, which can lead to bugs.

1. Never use “var” unless you’re working on a very old code base that is supposed to run in very old browsers… Even then, I would recommend writing modern JS without using "var" and then using Babel as recommended in the course.
2. The rule of thumb is always start with “const” when you’re making a variable, and then if you realize const isn't going to work, change it to “let”.
   E.g. a counter variable where you need to increment it and you want to have count start at zero, const count equals zero, we're not gonna be able to do count plus equals one. So, change it to let.
3. If you are starting with an array, an object, or a function, that you're storing in a variable, always use const. It's pretty common that you don't want those to be reassigned. If you're creating an array where usually the contents will change, but the container, the actual reference to that array, it's pretty rare for the reference to change. So always go with const until you realize, "Maybe I need let."

> My general recommendation, especially now when you're starting out, use const as your go to. If that's not going to work because you need to be able to reassign the value, then go with let, and never use var.
