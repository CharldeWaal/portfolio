import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle='Blog'>
            <ul>
                {data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))}
            </ul>
            <p>My blog content goes here</p>
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default BlogPage;