const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');

//define resolvers to instruct apollo server how to fetch data
const resolvers = {
    Query: {
        me: async (_, args, context) => {
            if(context.user){
                const user = await User.findOne({_id: context.user._id}).populate('savedBooks');
                return user;
            }

            throw new AuthenticationError('You are not logged in.')
        }
    },
    Mutation: {
        login: async (_, args) => {
            //check for a user and throw an error if not found
            const user = await User.findOne({email: args.email});
            if(!user) throw new AuthenticationError('Incorrect credentials used.');
            
            //verify the user password and throw an error if it doesn't match
            const verified = await user.isCorrectPassword(args.password);
            if(!verified) throw new AuthenticationError('Incorrect credentials used.');

            //if the user is verified then create a token for them
            const token = signToken(user);
            return {token, user};

        },
        addUser: async (_, args) => {
            //create a user in the mongoose database based on the arguments
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },
        saveBook: async (_, {content}) => {

        },
        removeBook: async (_, {bookId}) => {

        }
    }
};

module.exports = resolvers;