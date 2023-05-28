import {gql} from '@apollo/client';

export const CREATE_DIET = gql`
  mutation ($name: String!, $description: String!, $recipesId: String!) {
    createDiet(name: $name, description: $description, recipesId: $recipesId) {
      _id
      userId
      diet {
        _id
        name
      }
    }
  }
`;
