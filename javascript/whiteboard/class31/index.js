class Hashtable {
  constructor() {
    this.table = new Array(128);
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = {};
    }
    this.table[index][key] = value;
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index][key];
    }
    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index][key] !== undefined;
    }
    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(...Object.keys(this.table[i]));
      }
    }
    return keys;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.table.length;
    }
    return hash;
  }
}

const repeatedWord = function (string) {
  const map = new Hashtable();
  const words = string.match(/\w+/g);
  console.log(words);
  for (let word of words) {
    let lowercase = word.toLowerCase();
    if (map.has(lowercase)) {
      return lowercase;
    }
    map.set(lowercase, 1);
    console.log(map);
  }
  return '';
};


console.log(repeatedWord('It was the best of times. It was the worst of times.'));
// const hashtable = new Hashtable();
// hashtable.set('key1', 'value1');
// hashtable.set('key2', 'value2');
// console.log(hashtable.get('key1')); // 'value1'
// console.log(hashtable.has('key1')); // true
// console.log(hashtable.keys()); // ['key1', 'key2']
// console.log(hashtable.hash('key1'));
// console.log(hashtable.hash('key2'));
// console.log(hashtable.has('key2')); // true


module.exports = repeatedWord;


