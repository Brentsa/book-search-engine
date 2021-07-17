//import the graph query language function 
const {gql} = require('apollo-server-express');

//define our gql typedefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    input BookContent {
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Query{
        me: User
    }

    type Mutation{
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(content: BookContent!): User
        removeBook(bookId: ID!): User
    }
`;

//export the typedefs
module.exports = typeDefs;