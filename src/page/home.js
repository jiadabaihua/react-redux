import React from 'react';
import {connect} from 'react-redux';
import * as allActions from '../redux/actions';
@connect(
    state=>({
        ...state.test.toJSON()
    }),{
        ...allActions
    }
)
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    render(){
        return <div>home page!</div>
    }
}