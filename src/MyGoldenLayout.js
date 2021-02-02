import React, { Component } from 'react'
import GoldenLayout from 'golden-layout'
import MyRealTimeLineChart from './MyRealTimeLineChart';
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css";
const config = {
    content: [{
        type: 'row',
        content:[{
            type: 'react-component',
            component: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'react-component',
                component: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'react-component',
                component: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};
const myLayout = new GoldenLayout( config );
export default class MyGoldenLayout extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount(){
        myLayout.registerComponent( 'testComponent',MyRealTimeLineChart);
        myLayout.init();
    }
    render() {
        return (
            <div></div>
        )
    }
}
