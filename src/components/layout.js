import React, { useState } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Footer from "./footer"
import Overlay from "../components/navigation/overlay"
import "./layout.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  const onCloseHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Helmet>
      <>
        <Overlay onCloseHandler={onCloseHandler} open={open} />
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
