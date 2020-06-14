import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/layout.css"
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
const IndexPage = ({ pageContext: { hltvdata } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>My man{hltvdata.data}</h1>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`,justifyContent: `center` }}>
    </div> */}
    <VictoryChart
      domainPadding={{ x: 40 }}
    >
      <VictoryBar
        data={[
          { experiment: "trial 1", expected: 3.75, actual: 3.21 },
          { experiment: "trial 2", expected: 3.75, actual: 3.38 },
          { experiment: "trial 3", expected: 3.75, actual: 2.05 },
          { experiment: "trial 4", expected: 3.75, actual: 3.71 }
        ]}
        x="experiment"
        y={(d) => (d.actual / d.expected) * 100}
      />
      <VictoryAxis
        label="experiment"
        style={{
          axisLabel: { padding: 30 }
        }}
      />
      <VictoryAxis dependentAxis
        label="percent yield"
        style={{
          axisLabel: { padding: 40 }
        }}
      />
    </VictoryChart>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
