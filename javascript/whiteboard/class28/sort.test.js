'use strict';

const { Movies } = require('./movies');
const { sortTitle, sortYear, compareByYear, compareTitleIgn } = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const movies = sortYear(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'The Intouchables',
      'Valkyrie',
      'Ratatouille',
      'Stardust',
      'City of God',
      'Memento',
      'The Shawshank Redemption',
      'Beetlejuice',
      'Crocodile Dundee',
      'The Cotton Club',
    ]);
  });

  it('can sort movies by title', () => {
    const movies = sortTitle(Movies);
    expect(movies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });
});

describe('compareByYear', () => {
  it('should return the expected result for two movies with different years', () => {
    const movie1 = { title: 'Movie 1', year: 2000 };
    const movie2 = { title: 'Movie 2', year: 2010 };
    expect(compareByYear(movie1, movie2)).toBe(10);
    expect(compareByYear(movie2, movie1)).toBe(-10);
  });

  it('should return 0 for two movies with the same year', () => {
    const movie3 = { title: 'Movie 3', year: 2000 };
    const movie4 = { title: 'Movie 4', year: 2000 };
    expect(compareByYear(movie3, movie4)).toBe(0);
    expect(compareByYear(movie4, movie3)).toBe(0);
  });
});


describe('compareTitleIgn', () => {

  it('should return 0 for two movies with the same title, ignoring leading articles', () => {
    const movie3 = { title: 'A Clockwork Orange' };
    const movie4 = { title: 'A Clockwork Orange' };
    expect(compareTitleIgn(movie3, movie4)).toBe(0);
    expect(compareTitleIgn(movie4, movie3)).toBe(0);
  });

  it('should be case-insensitive', () => {
    const movie5 = { title: 'The Godfather' };
    const movie6 = { title: 'the godfather' };
    expect(compareTitleIgn(movie5, movie6)).toBe(0);
    expect(compareTitleIgn(movie6, movie5)).toBe(0);
  });
});
