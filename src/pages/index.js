import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Listing from "../components/listing";

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <Listing></Listing>
  </Layout>
)

export default IndexPage
