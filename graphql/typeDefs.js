const { gql } = require("apollo-server-express");

module.exports = gql`
  type Recipe {
    name:String,
    description:String,
    createdAt:String,
    thumbsUp:Int,
    thumbsDown:Int,
    id:String,
  }

  input RecipeInput {
    name:String,
    description:String,
  }
  #Queries
  type Query {
    recipe(ID:ID!): Recipe!
    getRecipe(amount:Int): [Recipe]
    getAllRecipe: [Recipe]
  }
  #mutations
  type Mutation {
     createRecipe(recipeInput: RecipeInput!): Recipe!
     deleteRecipe(ID:ID!): Boolean
     editRecipe(ID:ID!, recipeInput: RecipeInput): Boolean
     
  }
`;
