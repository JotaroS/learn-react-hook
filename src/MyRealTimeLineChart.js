import React, { Component } from 'react'

class MyRealTimeLineChart extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        };
    }
    componentDidMount() {
        setInterval(()=>{
            this.setState((state)=>{
                return {count: state.count+1}
            })
        },1000);
    }

    render() {
        return (
            <div>
                {this.state.count}
            </div>
        )
    }
}
export default MyRealTimeLineChart;