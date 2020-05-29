import React, {useEffect, useState} from 'react';
import {useStaticQuery, graphql, Link} from "gatsby";
import styled from "styled-components";

const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-size: 0.8rem;
        background: #524763;
        color: #fff;
        border: none;
        padding: 0.5em;
        text-decoration: none;
    }
`

const query = graphql`
            query BlogPostArchive {
              allMarkdownRemark(limit: 5, sort: {
                order: ASC
                fields: [frontmatter___date] 
              }) {
                totalCount
                edges {
                  node {
                    html
                    excerpt
                    frontmatter{
                      title
                      slug
                      date(formatString:"MMMM DD, YYYY")
                    }
                  }
                }
              }
            }  
        `

function Archive(props) {
    const {allMarkdownRemark} = useStaticQuery(query)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(allMarkdownRemark.edges)
    }, [])

    return (
        <aside>
            <h1>Archive</h1>
            <ArchiveList>
                {allMarkdownRemark.edges.map(edge => (
                    <li key={edge.node.frontmatter.slug}><Link to={`/posts/${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link></li>
                ))}
            </ArchiveList>
        </aside>
    );
}

export default Archive;