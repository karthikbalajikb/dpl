import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Layout from '../components';
import NameCard from '../components/NameCard/name-card'

const IndexPage = ({ data }) => (
  <Layout pathname={'//'}>
  <div>
    <Img sizes={data.headerImage.sizes} className="header-image" />
    <NameCard text_1="Hi, I am" text_2="Karthik Balaji" text_3="I am a javascript enthusiast" />
  </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MainWallPaperQuery {
    headerImage: imageSharp(fluid: {originalName: {regex: "/tech-wallpapers/"}}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`