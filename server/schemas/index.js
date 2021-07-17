const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');

//bundle typedefs and resolvers together for the server
module.exports = {typeDefs, resolvers};