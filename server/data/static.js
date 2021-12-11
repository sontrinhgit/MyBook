const { model } = require("mongoose")

const books = [
    {
        id: 1,
        name: 'De men phieu luu ky',
        genre: 'Adventure',
        authorId: 1,
    }, 
    {
    
        id: 2,
        name: 'Lam giau khong kho',
        genre: 'Education',
        authorId: 2,
    },
    {
    
        id: 3,
        name: 'Song mon',
        genre: 'Tieu thuyet',
        authorId: 2,

    },
    {
    
        id: 4,
        name: 'Doi thua',
        genre: 'Truyen ngan',
        authorId: 3
    }, {
    
        id: 5,
        name: 'Ky nghe lay Tay',
        genre: 'Phong su',
        authorId: 3
    }
]

const authors = [
    {
        id: 1, 
        name: 'Ngo Tat To',
        age: 127
    }, 
    {
        id: 2,
        name: 'Nam Cao',
        age: 106
    }, 
    {
        id: 3,
        name: 'Vu Trong Phung',
        age: 109
    }
]

module.exports =  {
    books,
    authors
}