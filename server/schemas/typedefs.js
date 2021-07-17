//import the graph query language function 
const {gql} = require('apollo-server-express');

//define our gql typedefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

//export the typedefs
module.exports = typeDefs;