/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    async function createPostsPage() {
        const results = await graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter{slug}
              }
            }
          }
        }
        `)

        results.data.allMarkdownRemark.edges.forEach(edge => {
            createPage({
                path: "/posts" + edge.node.frontmatter.slug,
                component: path.resolve("./src/components/postLayout.jsx"),
                context: {
                    slug: edge.node.frontmatter.slug
                }
            })
        })
    }

    return createPostsPage()
}