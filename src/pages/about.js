import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// @ts-ignore

const About = () => (
  <Layout>
    <SEO title="About" />
    <section className="main-panel">
      <div className="wotd">
        <div className="title">
          <h1>About this project</h1>
        </div>
        <br />
        <br />
        <div className="wotd__info">
          <p>
            This is a project I created in order to improve my vocabulary and
            spelling which I feel I was lacking when I rediscovered reading
            during the covid lockdowns. When I read an interesting word I add it
            to this website which allows others to join in and attempt to use
            these words as well.{" "}
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default About
