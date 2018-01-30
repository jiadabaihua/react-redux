/**
 * 尝试不用react-redux的Provider和connect函数，
 * 只用redux创建store
 */
import React, { Component } from "react";
import combinedReducer from './compose/compose-reducers';
import reducers from './redux/moduls';
import {createStore} from 'redux';
var store = createStore(combinedReducer(reducers));
export default class App extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}