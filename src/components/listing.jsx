import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";
import {navigate} from "gatsby-link";

const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;
    a {
        color: #524763;;
    }
    h3 {
        color: #524763;
        margin: 0;
    }
    p {
        font-size: 0.8rem
    }
    .read-more {
        font-size: 0.8rem;
        background: #524763;
        color: #fff;
        border: none;
        padding: 0.5em;
    }
`

const query = graphql`
query {
  allMarkdownRemark(limit: 10) {
    edges {
      node {
        excerpt
        frontmatter {
          title
          slug
          date(formatString: "MMM DD, YYYY")
        }
      }
    }
  }
}
`

function Listing(props) {
    const {allMarkdownRemark} = useStaticQuery(query)
    return (
        <div>
            {allMarkdownRemark.edges.map(edge => (
                <Post key={edge.node.frontmatter.slug}>
                    <h3>{edge.node.frontmatter.title}</h3>
                    <p>{edge.node.frontmatter.date}</p>
                    <p>{edge.node.excerpt}</p>
                    <button className={"read-more"} onClick={() => navigate(`/posts${edge.node.frontmatter.slug}`)}>Read More</button>
                </Post>
            ))}
        </div>
    );
}

export default Listing;