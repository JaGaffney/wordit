import React from "react"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Undo from "../components/undo/undo"
import WOTD from "../components/wotd/wotd"
import Score from "../components/score/score"

const IndexPage = props => {
  // const [width, setWidth] = useState(1000)
  // function handleWindowSizeChange() {
  //   if (typeof window !== "undefined") {
  //     setWidth(window.innerWidth)
  //   }
  // }
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("resize", handleWindowSizeChange)
  //   }
  //   return () => {
  //     if (typeof window !== "undefined") {
  //       window.removeEventListener("resize", handleWindowSizeChange)
  //     }
  //   }
  // }, [])
  // let isMobile = width <= 768

  return (
    <Layout>
      <SEO title="wordit" />
      <section className="main-panel">
        <Undo />
        <WOTD />
        <Score />
      </section>
    </Layout>
  )
}

const mapStateToProps = ({ data, user }) => {
  return { data, user }
}

export default connect(mapStateToProps)(IndexPage)
