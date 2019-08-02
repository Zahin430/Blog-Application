import React from 'react';
import Layout from '../components/layout'
import { graphql, useStaticQuery, Link } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
                frontmatter {
                    title 
                    date
                }
                fields {
                    slug
                }
            }
          }
        }
      }
    `)
    // console.log(data)


    return (
        <div>
            <Layout>
            <h1>Blog</h1>
           

            {/* As edges is an array so we are mapping over the array of edges  */}
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>
                            <Link to = {`/blog/${edge.node.fields.slug}`}>
                            {edge.node.frontmatter.title}
                            </Link> 
                            </h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}

export default BlogPage