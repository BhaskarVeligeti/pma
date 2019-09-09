import React, { Component } from 'react';
import BarChart from './BarChart';
import {View} from 'react-native';


class BarChartView extends Component {
	constructor(props) {
		super(props);
		console.log(".........Init BarChartView........");
		this.state = {
			width: this.props.width,
			height: this.props.height,
			margin: this.props.margin
			// margin : { left: 50, right: 30, top: 30, bottom: 50 }
		}
	}

	componentDidMount = () => {
		this.draw();
	};

	draw = () => {
		// var container = document.getElementById(this.props.container);
		// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", container)
		var model = this.props.gdata;
		var xKeys = Object.keys(model.data[0]); // pulling out all columns
		// var yKeys = model.yKeys;
		// console.log("model and keys",model,xKeys)
		var p = new BarChart({
			element: this.props.container,
			parent: this,
			data: model.data,
			width: this.state.width,
			height: this.state.height,
			margin: this.state.margin,
			xKeys: xKeys,
			// yKeys: yKeys,
			xAxisLabel: this.props.xAxisLabel,
			yAxisLabel: this.props.yAxisLabel,
			label: this.props.label,
			isFormat:this.props.isFormat
		});
		p.clean();
		p.draw();
	};

	render() {
		return <View id={this.props.container} />;
	}
}

export default BarChartView;
