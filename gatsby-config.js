module.exports = {
  siteMetadata: {
    title: `wordit`,
    description: `The automatic grouping application that's random without being random. Groups are created with algorithms to ensure no two groups are the same.`,
    author: `Jon Gaffney`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wordit`,
        short_name: `wordit`,
        start_url: `/`,
        background_color: `#181e2a`,
        theme_color: `#181e2a`,
        display: `fullscreen`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
