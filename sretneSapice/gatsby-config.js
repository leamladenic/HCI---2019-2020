module.exports = {
  siteMetadata: {
    title: `Sretne Šapice`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    menuItems: [
      {
        text: "BLOG",
        link: "/blog/",
      },
      {
        text: "PSI",
        link: "/dog/",
      },
      {
        text: "MAČKE",
        link: "/cat/",
      },
      {
        text: "TRGOVINA",
        link: "/shop/",
      },
      {
        text: "KONTAKTI",
        link: "/contact/",
      },
      {
        text: "O NAMA",
        link: "/about/",
      },
      {
        text: "Q/A",
        link: "/qa/",
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
