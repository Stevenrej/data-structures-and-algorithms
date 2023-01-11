

class HashTable {
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

function leftJoin(leftMap, rightMap) {
  const result = [];
  for (const key of leftMap.keys()) {
    const leftValue = leftMap.get(key);
    const rightValue = rightMap.get(key) || null;
    result.push([key, leftValue, rightValue]);
  }
  return result;
}








const synonyms = new HashTable();
synonyms.set('happy', 'joyful');
synonyms.set('sad', 'depressed');
synonyms.set('excited', 'thrilled');

const antonyms = new HashTable();
antonyms.set('excited', 'calm');
antonyms.set('happy', 'sad');
antonyms.set('anxious', 'delighted');

const result = leftJoin(synonyms, antonyms);
console.log(result);

module.exports = {
  HashTable,
  leftJoin,
};

