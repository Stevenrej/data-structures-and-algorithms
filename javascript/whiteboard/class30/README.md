# Hashtables

Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access of data becomes very fast if we know the index of the desired data.

Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses hash technique to generate an index where an element is to be inserted or is to be located from.

## Challenge

Implement a Hashtable Class with the following methods:

set
Arguments: key, value
Returns: nothing
This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
Should a given key already exist, replace its value from the value argument given to this method.
get
Arguments: key
Returns: Value associated with that key in the table
has
Arguments: key
Returns: Boolean, indicating if the key exists in the table already.
keys
Returns: Collection of keys
hash
Arguments: key
Returns: Index in the collection for that key


## Approach & Efficiency

Used an array as the underlying data structure to store the key-value pairs. I used the hash function to map the keys to indices in the array. This approach is known as open addressing.

I chose this approach because it is simple to implement and does not require the use of linked lists, which can be more complex to implement and may result in longer access times.

The time complexity of the set, get, and has methods is O(1) on average, since they only require a single array access to find the key-value pair. The space complexity is O(n), where n is the number of key-value pairs in the table, since the size of the array needs to be at least as large as the number of key-value pairs in the table.

The time complexity of the keys method is O(n), since it needs to iterate over all the key-value pairs in the table to collect the keys. The space complexity is also O(n), since it needs to store all the keys in an array before returning them.

The time complexity of the hash method is O(k), where k is the length of the key. The space complexity is O(1), since it only stores a single index in a variable.

## API

set(key, value): This method takes in a key and a value, hashes the key to find the index in the table, and stores the key-value pair in the table. If the key already exists in the table, its value is replaced with the value provided to this method. This method does not return anything.

get(key): This method takes in a key and returns the value associated with that key in the table. If the key is not found in the table, this method returns null.

has(key): This method takes in a key and returns a boolean indicating whether the key exists in the table.

keys(): This method returns a collection of keys in the table.

hash(key): This method takes in a key and returns the index in the table where the key-value pair should be stored. This method uses a hash function to map the key to an index in the table.
