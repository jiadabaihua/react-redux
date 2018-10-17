import React from 'react';
import './card.css';
export default class Card extends React.PureComponent{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }
    render(){
        return React.createElement(
            'span',
            {style:{color:'red'}}
            ,'\u81EA\u52A8\u8C03'
        )
    }
}