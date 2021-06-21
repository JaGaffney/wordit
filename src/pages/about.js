import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// @ts-ignore

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About this project</h1>
    <p>
      This is a project I created in order to improve my vocabulary and spelling
      which I feel I was lacking when I rediscovered reading during the covid
      lockdowns. When I read an interesting word I add it to this website which
      allows others to join in and attempt to use these words as well.{" "}
    </p>

    <h1>Website</h1>
    <p>
      <a href="https://jongaffney.tech/">https://jongaffney.tech/</a>
    </p>
    <h1>Github</h1>
    <p>
      <a href="https://github.com/JaGaffney">https://github.com/JaGaffney</a>
    </p>
  </Layout>
)

export default About
