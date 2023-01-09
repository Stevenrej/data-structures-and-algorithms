const assert = require('assert');

const Hashtable = require('./index');

describe('Hashtable', () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  it('sets and gets a value correctly', () => {
    hashtable.set('key1', 'value1');
    assert.strictEqual(hashtable.get('key1'), 'value1');
  });

  it('returns null for a key that does not exist', () => {
    assert.strictEqual(hashtable.get('key1'), null);
  });

  it('returns a list of all unique keys', () => {
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    assert.deepEqual(hashtable.keys(), ['key1', 'key2']);
  });

  it('handles a collision correctly', () => {
    hashtable.set('key1', 'value1');
    // The following key will cause a collision because the hash function will
    // return the same index as 'key1'
    hashtable.set('kfy1', 'value2');
    assert.strictEqual(hashtable.get('kfy1'), 'value2');
  });

  it('retrieves a value from a bucket with a collision correctly', () => {
    hashtable.set('key1', 'value1');
    // The following key will cause a collision because the hash function will
    // return the same index as 'key1'
    hashtable.set('kfy1', 'value2');
    assert.strictEqual(hashtable.get('key1'), 'value1');
  });

  it('hashes a key to an in-range value', () => {
    assert.strictEqual(typeof hashtable.hash('key1'), 'number');
    assert.strictEqual(hashtable.hash('key1') < 128, true);
  });
});
