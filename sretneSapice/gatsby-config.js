module.exports = {
  siteMetadata: {
    title: `Sretne Šapice`,
    description: `Aplikacija za udomljavanje zivotinja`,
    author: `@sretneSapice`,
    menuItems: [
      {
        text: "HOME",
        link: "/",
      },
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
