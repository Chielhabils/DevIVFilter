const countArtists = require('./countArtists')

test('Correctly counts how many artists were added', () =>{
    expect(countArtists(24, 2)).toBe(26)
})