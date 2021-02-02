import React, { Component } from 'react'
import GoldenLayout from 'golden-layout'
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css";
const config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};
const myLayout = new GoldenLayout( config );
export default class MyGoldenLayout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        myLayout.registerComponent( 'testComponent', function( container, componentState ){
            container.getElement().html( '<h2>' + componentState.label + '</h2>' );
        });
        myLayout.init();
    }
    render() {
        return (
            <div></div>
        )
    }
}
