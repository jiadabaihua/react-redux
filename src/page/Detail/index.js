import React from 'react';
import '../../style/detail.css';
export default class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        
    }
    
    render(){
        return (<div className='flex-box'>
                    <div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
               </div>)
    }
}