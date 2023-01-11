# Left Join

## Hashtables

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

## Challenge

Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join
Arguments: two hash maps
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic
NOTES:

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Approach & Efficiency

The leftJoin function takes in two HashTable objects as input: a left map and a right map. It then loops through the keys of the left map, and for each key, it retrieves the corresponding values from both maps (using the get method) and creates a new array containing the key, the value from the left map, and the value from the right map (or null if the key is not present in the right map). It then adds this array to a resulting array. Finally, it returns this resulting array.

This approach is called a "left join" because it includes all of the elements from the left map and any matching elements from the right map, but if there is no match on the right map it will put null instead of match.
It is similar to SQL left join where we fetch all the rows from left table and match it with right table if possible.

The function makes use of the keys() method of the HashTable class to get an array of all the keys in the left map, and it uses the get method to retrieve the values associated with each key in both maps.

## API

set(key, value): This method takes in a key and a value, hashes the key to find the index in the table, and stores the key-value pair in the table. If the key already exists in the table, its value is replaced with the value provided to this method. This method does not return anything.

get(key): This method takes in a key and returns the value associated with that key in the table. If the key is not found in the table, this method returns null.

has(key): This method takes in a key and returns a boolean indicating whether the key exists in the table.

keys(): This method returns a collection of keys in the table.

hash(key): This method takes in a key and returns the index in the table where the key-value pair should be stored. This method uses a hash function to map the key to an index in the table.

## WHiteboard

![whiteboard](class33.jpeg)
