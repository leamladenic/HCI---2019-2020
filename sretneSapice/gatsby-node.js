const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allContentfulBlogArticles {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const resultDogs = await graphql(`
    {
      allContentfulDogs {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const resultCats = await graphql(`
    {
      allContentfulCats {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const resultProducts = await graphql(`
    {
      allContentfulMyProducts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogArticles.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blogArticle.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
  resultDogs.data.allContentfulDogs.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/popAdoptDog.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
  resultCats.data.allContentfulCats.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/popAdoptCat.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
  resultProducts.data.allContentfulMyProducts.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/popShop.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
