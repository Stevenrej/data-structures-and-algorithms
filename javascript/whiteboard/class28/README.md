# Sorting: Comparisons


When sorting an array, a key step in the algorithm is determining what their order should be. In the insertion sort algorithm, the insertion phase has a while loop that checks for whether the number to insert is less than the number at the iteration index. The first time the number to insert is greater, the algorithm inserts at the previous index. Merge Sort applies the same logic when recombining sub-arrays, as it needs to choose whether to pull from the left or the right array.

For numbers, this comparison is easy - they go in ascending order. JavaScript, Python, and all the languages have a built-in operator to make this check for numbers: <, the less-than operator.

However, we very rarely want to sort an array of numbers. Usually, we want to sort an array of some complex data object we have created for our programs. For instance, we could sort an array of CookieStand objects by cookies sold, or an array of HornedBeasts by the name of their species.

All our programming languages have a built-in sort function. And all our programming languages include a mechanism to provide a “comparator callback”! We have seen callback functions in other places. A filter callback function returns a boolean, to decide whether to keep a certain item. A map callback transforms each input value into some other output value. A reduce callback combines together all the items in an array into a single value.

The sort functions take a callback which tells the sort algorithm in what order two items should be placed. This callback takes two parameters, a and b, and returns a number. When the number is less than 0, the a parameter should be sorted to the left of the b parameter. When the number is greater than 0, a should be sorted to the right of b! When the comparator returns 0, it means that (as far as the comparator is concerned) the items are equivalent, and it doesn’t matter which order they go in.

## Challenge

In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Tests for these functions, and an array of sample data, have been provided in test.js and movies.js.

In the second half of the code challenge, you will write tests for your comparator functions. This may necessitate refactoring the code you wrote in part one. Your tests will need to call the comparator functions directly, and make assertions about the response values given test inputs.
