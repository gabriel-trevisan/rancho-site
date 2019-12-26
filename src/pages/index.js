import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import AboutUs from "../components/aboutUs"
import Atacado from "../components/atacado"
import Lounge from "../components/lounge"
import Footer from "../components/footer"
import Map from "../components/map"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
    return(
      <Layout>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
        </Helmet>
        <Header></Header>
        <AboutUs></AboutUs>
        <Atacado></Atacado>
        <Lounge></Lounge>
        <Map></Map>
        <Footer></Footer>
      </Layout>
    )
}

export default IndexPage
