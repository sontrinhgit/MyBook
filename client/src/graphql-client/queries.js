import {gql} from '@apollo/client'

const getBooks = gql`
    query getBooksQuery {
        books {
            name
            id
        }
    }
`

const getSingleBook = gql`
    query getSingleBook ($id: ID) {
        book (id: $id){
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                }
            }
        }
    }
`

const getAuthor = gql`
    query getAuthorsQuery {
        authors {
            id
            name
        }
    }
`

export { getBooks, getSingleBook, getAuthor }