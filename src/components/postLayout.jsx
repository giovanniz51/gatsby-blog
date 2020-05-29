import React from 'react';
import {graphql} from "gatsby";
import Layout from "./layout";
function PostLayout({data}) {
    return (
        <Layout>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}></div>
        </Layout>
    );
}

export default PostLayout;

export const query = graphql`
        query PostQuery($slug: String!){
          markdownRemark(frontmatter: {
            slug: {
              eq: $slug
            }
          }) {
          frontmatter {
            title
          }
          html
          }
    }
`