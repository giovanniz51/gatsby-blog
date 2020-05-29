/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"
import styled from "styled-components";
import Header from "./header"
import "./layout.css"
import Archive from "./archive";
import {Spring} from "react-spring";

const Mainlayout = styled.main`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 40px;
`

const Footer = styled.footer `
    padding: .5rem;
    background: #524763;
    color: #fff;
    text-align: center;
    a {
        color: #fff;
    }
`

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
                <Mainlayout>
                    <div>
                        {children}
                    </div>
                    <Archive></Archive>
                </Mainlayout>
                <Footer>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                </Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
