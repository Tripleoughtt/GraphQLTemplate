import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean
} from 'graphql';



let schema = new GraphQLSchema({
  // top level fields
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      test: {
        type: GraphQLInt,
        resolve: () => 42
      }
    })
  }),

  // mutation: new GraphQLObjectType({
  //   name: 'Mutation',
  //   fields: () => ({
  //   })
  // })
});

export default schema;
