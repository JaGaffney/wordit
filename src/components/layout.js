import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Helmet>
      <>
        <main>{children}</main>
        <Footer />
      </>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
