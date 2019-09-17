import React from 'react';
import { Dimensions } from 'react-native';
import * as d3 from "d3";
import Svg, { G, Rect, Line, Text } from 'react-native-svg';
const { width, height } = Dimensions.get('window');


const BarChart = ({ data, round, unit }) => {

    const GRAPH_MARGIN = 10
    const GRAPH_BAR_WIDTH = 5
    const colors = { axis: 'red' }
    const color = d3.scaleOrdinal(d3.schemePaired);


    // Dimensions
    const SVGHeight = height / 2
    const SVGWidth = width-20
    const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
    const graphWidth = SVGWidth - 2 * GRAPH_MARGIN


    // X scale point
    const xDomain = data.map(item => item.label)
    const xRange = [0, graphWidth]
        const x = d3
		.scaleBand()
		.domain(xDomain)
		 .range(xRange)
		.paddingInner(0.1)
        .paddingOuter(0.1);
        


    // Y scale linear
    const maxValue = d3.max(data, d => d.value)
    const topValue = Math.ceil(maxValue / round) * round
    const yDomain = [0, topValue]
    const yRange = [0, graphHeight]
    const y = d3.scaleLinear()
        .domain(yDomain)
        .range(yRange)

    // top axis and middle axis
    const middleValue = topValue / 2

    return (
        <>
            <Svg width={SVGWidth} height={SVGHeight} >
                {/* translate for 'graphHeight' on y axis */}
                <G y={graphHeight + GRAPH_MARGIN}>

                    {/* Top value label */}
                    <Text
                        x={graphWidth}
                        textAnchor="end"
                        y={y(topValue) * -1 - 1}
                        fontSize={12}
                        fill="black"
                        fillOpacity={0.4}>
                        {topValue + ' ' + unit}
                    </Text>

                    {/* top axis */}
                    <Line
                        x1="0"
                        y1={y(topValue) * -1}
                        x2={graphWidth}
                        y2={y(topValue) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />


                    {/* middle axis */}
                    <Line
                        x1="0"
                        y1={y(middleValue) * -1}
                        x2={graphWidth}
                        y2={y(middleValue) * -1}
                        stroke={colors.axis}
                        strokeDasharray={[3, 3]}
                        strokeWidth="0.5"
                    />

    {/* left axis */}
                    <Line
                        x1="0"
                        y1='0'
                        x2={x(topValue)}
                        y2={y(topValue) * -1}
                        stroke={colors.axis}
                        strokeWidth="2"
                    />


                    {/* bottom axis */}
                    <Line
                        x1="0"
                        y1="2"
                        x2={graphWidth}
                        y2="2"
                        stroke={colors.axis}
                        strokeWidth="0.5"
                    />

                    {/* bars */}
                    {data.map((item, idx) => (
                        <Rect
                            key={'bar' + item.label}
                            x={x(item.label) - (GRAPH_BAR_WIDTH / 2)}
                            y={y(item.value) * -1}
                            rx={2.5}
                            // width={GRAPH_BAR_WIDTH}
                            width={x.bandwidth()}
                            height={y(item.value)}
                            fill={color(idx)}
                        />
                    ))}

                    {/* labels */}
                    {data.map(item => (
                        <Text
                            key={'label' + item.label}
                            fontSize="8"
                            x={x(item.label)}
                            y="10"
                            textAnchor="middle">{item.label}</Text>
                    ))}

                </G>
            </Svg>
        </>
    )
}

export default BarChart;