import * as React from 'react'
import Layout from '../components/Layout/Layout';
import "@fontsource/inter";
import "@fontsource/inter/600.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/400.css"
import { Welcome } from '../components/Welcome/Welcome';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
        <Welcome/>
    </Layout>
  )
}

export default IndexPage
