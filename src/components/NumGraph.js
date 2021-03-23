import React, { useEffect, useRef } from 'react'
import { axisBottom, axisLeft, scaleBand, select } from 'd3'

const NumGraph = ({ data }) => {
  const ref = useRef()

  useEffect(() => {
    main()
  }, [])

  const main = () => {
    select(ref.current).append('svg')

    // const svg = select('svg'),
    //   margin = 10,
    //   width = svg.attr('width') - margin,
    //   height = svg.attr('height') - margin

    // const xScale = scaleBand().range([0, width]).padding(0.4)

    // const g = svg.append('g').attr('transform', `translate(100, 100)`)

    // xScale.domain(data.map((d) => d))

    // g.append('g').call(axisBottom(xScale))
  }

  return <div ref={ref} className='num-graph-wrapper'></div>
}

export default NumGraph
