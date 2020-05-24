const addArtist = require('./addArtist')

test('Correctly adds artist to the artist array', () =>{
    const array = ['Artiest 1','Artiest 2','Artiest 3']
    expect(addArtist(array, 'Artiest 4')).toContain('Artiest 4')
})