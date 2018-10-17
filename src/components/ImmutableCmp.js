import React from 'react';
import * as api from 'immutable';
export default class ImmutableCmp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    componentDidMount(){
        console.log('immute');
    }
    clickMe(){
        this.forceUpdate((state)=>{
            this.state.title=1111
        })
    }
    render(){
        return (<div>
                    {this.state.title}
                    <button onClick={::this.clickMe}>点我</button>
                </div>)
    }
}