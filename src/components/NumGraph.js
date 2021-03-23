import React, { useEffect, useRef } from 'react'
import { axisBottom, axisLeft, max, scaleBand, scaleLinear, select } from 'd3'

const NumGraph = ({ data }) => {
  const ref = useRef()

  useEffect(() => {
    main()
  }, [])

  const main = () => {
    const svg = select(ref.current),
      width = 300,
      height = 200

    svg
      .attr('viewBox', `-10 -10 ${width + 50} ${height + 50}`)
      .attr('preserveAspectRatio', 'xMinYMin')

    const xScale = scaleBand().range([0, width]).padding(0.4),
      yScale = scaleLinear().range([height, 0])

    const g = svg.append('g').attr('transform', `translate(10, 10)`)

    xScale.domain(data.map((d) => d.number))
    yScale.domain([0, max(data, (d) => d.count)])

    g.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(axisBottom(xScale))

    g.append('g')
      .call(axisLeft(yScale).ticks(7))
      .append('text')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text('value')

    g.selectAll('.bar')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'bar-group')
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.number))
      .attr('y', (d) => yScale(d.count))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => height - yScale(d.count))

    g.selectAll('.bar-group')
      .append('text')
      .attr('x', (d) => xScale(d.number))
      .attr('y', (d) => yScale(d.count))
      .attr('dy', '-0.5em')
      .attr('dx', '0.1em')
      .attr('fill', 'black')
      .text((d) => d.count)
  }

  return (
    <div className='num-graph-wrapper'>
      <svg ref={ref} className='num-graph'></svg>
    </div>
  )
}

export default NumGraph
