require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
        text: "KONTAKT",
        link: "/contact/",
      },
      {
        text: "O NAMA",
        link: "/about/",
      },
    ],
  },

  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-modal-routing`,

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
    {
      resolve: "gatsby-source-googlemaps-geocoding",
      options: {
        key: "YOUR_GOOGLE_MAPS_GEOCODING_API_KEY",
        address: "ADDRESS_YOU_ARE_GEOCODING",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
