# Unexpected Block Scope in JavaScript

This repository demonstrates a common issue in JavaScript related to block scope and the `let` keyword.

## The Problem

JavaScript uses block scope for variables declared with `let` and `const`.  This means that variables are only accessible within the block of code (defined by curly braces `{}`) in which they are declared.  This can lead to unexpected behavior if not carefully considered, especially when dealing with nested blocks (e.g., `if` statements, loops).

The `bug.js` file contains code that exhibits this unexpected behavior. The variable `x` is declared twice, once in the outer scope and once inside an `if` statement.  The `console.log` statement outside the `if` block does *not* print the value assigned within the `if` block; instead, it prints the value from the outer scope.

## The Solution

The `bugSolution.js` file provides a solution by using a single variable, avoiding the confusion caused by the nested declaration.