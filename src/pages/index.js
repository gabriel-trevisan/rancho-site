import React, { Component } from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import AboutUs from "../components/aboutUs"
import Atacado from "../components/atacado"
import Lounge from "../components/lounge"
import Footer from "../components/footer"

class IndexPage extends Component {
  render(){
    return(
      <Layout>
        <Header></Header>
        <AboutUs></AboutUs>
        <Atacado></Atacado>
        <Lounge></Lounge>
        <Footer></Footer>
      </Layout>
    )
  }
}

export default IndexPage
