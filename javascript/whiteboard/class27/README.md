# class27


 The array [8, 4, 23, 42, 16, 15] is being sorted using the insertion sort algorithm.

Pass 1:


In the first pass through of the insertion sort, the algorithm looks for a smaller number than the one currently at index 0 (8). It finds this number at index 1 (4) and swaps the two values. The array is now [4, 8, 23, 42, 16, 15].

Pass 2:



In the second pass through, the algorithm looks for a smaller number than the one currently at index 1 (8). It finds that there is no smaller number, so it leaves the value at index 1 unchanged. The array is still [4, 8, 23, 42, 16, 15].


Pass 3:


In the third pass through, the algorithm looks for a smaller number than the one currently at index 2 (23). It finds that there are smaller numbers at indices 4 and 5 (16 and 15). However, it only swaps the value at index 4 with the value at index 2, since 16 is the smaller of the two numbers. The array is now [4, 8, 16, 23, 42, 15].


Pass 4:


In the fourth pass through, the algorithm looks for a smaller number than the one currently at index 3 (23). It finds a smaller number at index 5 (15) and swaps the two values. The array is now [4, 8, 16, 15, 42, 23].


Pass 5:



In the fifth pass through, the algorithm looks for a smaller number than the one currently at index 4 (42). It finds that there is no smaller number, so it leaves the value at index 4 unchanged. The array is still [4, 8, 16, 15, 42, 23].


Pass 6:



In the sixth and final pass through, the algorithm looks for a smaller number than the one currently at index 5 (42). It finds that there is no smaller number, so it leaves the value at index 5 unchanged. The array is now [4, 8, 16, 15, 42, 23], and the insertion sort algorithm has completed its execution.





