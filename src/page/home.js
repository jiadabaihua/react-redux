import React from 'react';
import {connect} from 'react-redux';
import * as allActions from '../redux/actions';
@connect(
    state=>({...state.test.toJS()})
    ,{...allActions}
  )
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        debugger
    }
    render(){
        return <div>home page!</div>
    }
}