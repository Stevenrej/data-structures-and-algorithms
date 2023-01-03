Pass 1:


In the first pass through of the insertion sort, we evaluate if there is a smaller number in the array than what is currently present in index 0. We find this smaller number right away in index 1. The inner loop starts at index 0 and compares 4 with 8. Since 4 is smaller, it shifts 8 to the right and decrements j. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (4). The array is now [4, 8, 23, 42, 16, 15].

Pass 2:



The second pass through the array evaluates the remaining values in the array to see if there is a smaller value other than the current position of i. 8 is the 2nd smallest number in the array, so it "swaps" with itself. The inner loop starts at index 1 and compares 8 with 4. Since 8 is larger, it continues to the next iteration. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (8). The array is now [4, 8, 23, 42, 16, 15].

Pass 3:


The third pass through evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are smaller than the value in position 2. The inner loop starts at index 2 and compares 23 with 8. Since 23 is larger, it continues to the next iteration. The inner loop compares 23 with 4. Since 23 is larger, it continues to the next iteration. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (23). The array is now [4, 8, 23, 42, 16, 15].

Pass 4:


The 4th pass through on the array evaluates the remaining index in the array. 16 is smaller than the value in position 3. The inner loop starts at index 3 and compares 16 with 42. Since 16 is smaller, it shifts 42 to the right and decrements j. The inner loop compares 16 with 23. Since 16 is smaller, it shifts 23 to the right and decrements j. The inner loop compares 16 with 8. Since 16 is smaller, it shifts 8 to the right and decrements j. The inner loop compares 16 with 4. Since 16 is smaller, it shifts 4 to the right and decrements j. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (16). The array is now [4, 8, 16, 23, 42, 15].

Pass 5:



The 5th pass through of the array only has one other index to evaluate. 15 is smaller than the value in position 4. The inner loop starts at index 4 and compares 15 with 42. Since 15 is smaller, it shifts 42 to the right and decrements j. The inner loop compares 15 with 23. Since 15 is smaller, it shifts 23 to the right and decrements j. The inner loop compares 15 with 16. Since 15 is smaller, it shifts 16 to the right and decrements j. The inner loop compares 15 with 8. Since 15 is smaller, it shifts 8 to the right and decrements j. The inner loop compares 15 with 4. Since 15 is smaller, it shifts 4 to the right and decrements j. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (15). The array is now [4, 8, 15, 16, 23, 42].

Pass 6:



On its final iteration through the array, it will swap places with itself as it evaluates the value against itself. The inner loop starts at index 5 and compares 42 with 23. Since 42 is larger, it continues to the next iteration. The inner loop compares 42 with 16. Since 42 is larger, it continues to the next iteration. The inner loop compares 42 with 15. Since 42 is larger, it continues to the next iteration. The inner loop compares 42 with 8. Since 42 is larger, it continues to the next iteration. The inner loop compares 42 with 4. Since 42 is larger, it continues to the next iteration. The inner loop breaks out of the loop since j is now -1. The inner loop sets the value at index j + 1 to the current element (42). The array is now [4, 8, 15, 16, 23, 42].

After this iteration, i will increment to 6, forcing it to break out of the outer for loop and leaving our array now sorted.


