import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { XYPlot, LineSeries, VerticalBarSeries, MarkSeries } from 'react-vis';
const data = [
  { x: 0, y: 8 },
  { x: 1, y: 5 },
  { x: 2, y: 4 },
  { x: 3, y: 9 },
  { x: 4, y: 1 },
  { x: 5, y: 7 },
  { x: 6, y: 6 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 0 }
];
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>HLTV data!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <XYPlot height={200} width={200}>
      <VerticalBarSeries data={data} />
    </XYPlot>
    <XYPlot height={200} width={200}>
      <LineSeries data={data} />
    </XYPlot>
    <XYPlot height={200} width={200}>
      <MarkSeries data={data} />
    </XYPlot>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
