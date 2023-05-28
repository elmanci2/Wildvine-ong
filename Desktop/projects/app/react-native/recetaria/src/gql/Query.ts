import {gql} from '@apollo/client';

export const GET_CATEGORI_QUERY = gql`
  query {
    categorias: getRecipeCategorie {
      category
      emoji
    }
    destacadas: getRecipeByCategory(category: "Fácil", page: 5) {
      title
      time
      id
      image
      metaheader {
        id
        title
        element
      }
      preview
      ratings {
        stars
      }
    }

    faciles: getRecipesByKeyword(
      keyword: "Postres fáciles"
      page: 1
      limit: 5
    ) {
      title
      time
      id
      image
      metaheader {
        id
        title
        element
      }
      preview
      ratings {
        stars
      }
    }

    Vegetariana: getRecipeByCategory(category: "Vegetariana", page: 1) {
      title
      time
      id
      image
      metaheader {
        id
        title
        element
      }
      preview
      ratings {
        stars
      }
    }

    vegana: getRecipeByCategory(category: "vegana", page: 1) {
      title
      time
      id
      image
      metaheader {
        id
        title
        element
      }
      preview
      ratings {
        stars
      }
    }

    mediterranea: getRecipeByCategory(category: "Mediterránea", page: 1) {
      title
      time
      id
      image
      metaheader {
        id
        title
        element
      }
      preview
      ratings {
        stars
      }
    }
  }
`;

export const GET_RECIPE_QUERY = gql`
  query ($id: String!) {
    getRecipe(id: $id) {
      id
      title
      image
      video
      preview
      history
      keywords {
        id
        keyword
      }
      steps {
        instruction
        description
      }
      metaextra {
        id
        title
        values {
          item
        }
      }
      tips
      ingredients {
        id
        name
        emoji
      }
      ratings {
        stars
        votes
      }
      uploadDate
      metaheader {
        id
        title
        element
      }
    }
  }
`;

export const GET_RECIPE_BY_CATEGORY_QUERY = gql`
  query ($term: String!, $page: Int!) {
    results: getRecipeBySearch(search: $term, page: $page) {
      id
      title
      image
      time
      preview
      history
      keywords {
        id
        keyword
      }
      metaextra {
        id
        title
        values {
          item
        }
      }
      uploadDate
      ratings {
        stars
        votes
      }
    }
  }
`;

/// user querie

export const GETUSER_QUERY = gql`
  query {
    getUser {
      email
      id
      isPremium
      name
      password
      role
      upStringdAt
    }
  }
`;
