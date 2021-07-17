//define resolvers to instruct apollo server how to fetch data
const resolvers = {
    Query: {
        helloWorld: () => {
          return 'Hello world!';
        }
      }
};

module.exports = resolvers;