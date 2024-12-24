# Type 'string' is not assignable to type 'Date'

This repository demonstrates a common TypeScript error: assigning a string to a Date variable.

## Bug

The `greet` function takes a `Date` object as the second parameter. However, the code attempts to pass a string to this parameter, resulting in a type error.

## Solution

The solution involves correctly parsing the string into a `Date` object before passing it to the `greet` function.  The `new Date()` constructor can be used for this purpose.