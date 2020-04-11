import React, {useState, useEffect} from 'react';
import { scaleLinear, scaleBand } from 'd3-scale';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import XYAxis from '../linechart/axis/xyaxis.js';
import Line from '../linechart/line/line.js';
import { transition } from 'd3-transition';

class LineChart extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: [
            { name: 0, value: 0 },
            ],
            windowwidth: window.innerWidth, 
            windowheight: window.innerHeight
        };
    }

    updateWidth = () => {
        this.setState({
            windowwidth: window.innerWidth, 
            windowheight: window.innerHeight
        });
    }
    
    componentDidMount = () => {
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillReceiveProps = (props) => {
        
        this.newData(props);
        
    }

    newData = (props) => {
        if(props.resetState !== true)
        {
            this.setState({
                data: this.state.data.concat([{name: props.name, value: props.value}])
            });
        }
        else{
            this.setState({
                data:[
                    { name: 0, value: 0 },
                    ] 
            })
        }
    }


    render() {

        const { data } = this.state;
        const parentWidth = this.state.windowwidth/1.5;

        const margins = {
            top: 20,
            right: 0.06*this.state.windowwidth,
            bottom: 20,
            left: 0.06*this.state.windowwidth,
          };

        const width = parentWidth - margins.left - margins.right;
        const height = this.state.windowheight/2 - margins.top - margins.bottom;

        const ticks = 5;
        const t = transition().duration(1000);

        const xScale = scaleLinear()
        .domain(extent(data, d => d.name))
        .range([0, width]).nice();
        
        const yScale = scaleLinear()
        .domain(extent(data, d => d.value))
        .range([height, 0])
        .nice();

        const lineGenerator = line()
        .x(d => xScale(d.name))
        .y(d => yScale(d.value))
        .curve(curveMonotoneX);
        
        return (
            <div>
                <svg
                    className="lineChartSvg"
                    width={width + margins.left + margins.right}
                    height={height + margins.top + margins.bottom}
                >
                <g transform={`translate(${margins.left}, ${margins.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
                </g>
                </svg>

            </div>
        );
    }


}

export default LineChart;
