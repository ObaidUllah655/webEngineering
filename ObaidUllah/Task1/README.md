# Task 1 — ES6 Features Implementation

## Objective
Implement a JavaScript program demonstrating core ES6 features.

## Features Demonstrated

### 1. `let` and `const` Variable Declarations
- `var` is function-scoped and can be re-declared
- `let` is block-scoped and cannot be re-declared in the same scope
- `const` is block-scoped and cannot be re-assigned

### 2. Arrow Functions
- Used with `map()` to square each number: `n => n * n`
- Used with `filter()` to keep even squares: `n => n % 2 === 0`
- Used with `reduce()` to sum values: `(acc, n) => acc + n`

### 3. ES6 Classes
- Defined a `Student` class with a constructor, properties (`name`, `rollNo`, `marks`), and methods (`average()`, `display()`)
- Instantiated multiple objects and called methods on them

### 4. Array Methods — `map()` & `filter()`
- Used `map()` to apply a 10% discount to all products
- Used `filter()` to extract only Electronics category products

## How to Run
Open `index.html` in any modern browser. All output is rendered live on the page.

## Files
| File | Description |
|------|-------------|
| `index.html` | Complete implementation with live output |
| `README.md` | This explanation file |
