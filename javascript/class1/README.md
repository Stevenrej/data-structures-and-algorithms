# Reverse an Array

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.


## Whiteboard Process

[Reverse Array Whiteboard](reverseArray.jpeg)

## Approach & Efficiency

Algorithm:
-declare reverseArray function tha takes an array as a parameter
-create front variable and assign the first index of the input array
-create end variable and dynamically assign the last index of the input array
-while end index is greater than the front index
 -create a temp variable and assign the array at  front
 -assign array at end to array at front
 -assign array at temp to array at end
 -increment front variable
 -decrement end variable
-Return Modified array

Big O:
 space: O(1)
 time: O(n)
