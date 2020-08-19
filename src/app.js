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
        this.state={}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error, info){
        this.setState({hasError:true})
    }
    componentDidMount(){

    }
    catchClick(){
        console.log('react组件上的父节点')
    }
    domParent(){
        console.log('dom上的父节点')
    }
    render() {
        if(this.state.hasError){
            return (<div>有错了</div>)
          }
        return (
            <div>
                <div className="content-wrapper" onClick={::this.catchClick}>
                    {this.props.children}
                </div>
                <div id='side-node' onClick={::this.domParent}></div>
            </div>
        );
    }
}