import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const [width, setWidth] = useState(1000)

  function handleWindowSizeChange() {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowSizeChange)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowSizeChange)
      }
    }
  }, [])

  let isMobile = width <= 768

  return (
    <Layout>
      <SEO title="wordit" />
      <section className="main-panel"></section>
    </Layout>
  )
}

const mapStateToProps = ({ data }) => {
  return { data }
}

export default connect(mapStateToProps)(IndexPage)
