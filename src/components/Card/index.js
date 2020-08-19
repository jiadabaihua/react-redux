import React from 'react';
// import './card.css';
export default class Card extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        console.log(this.state.count);
        return (
            <div>点我试试</div>
        )

        return React.createElement(
            'span',
            {style:{color:'red'}}
            ,'\u81EA\u52A8\u8C03'
        )
    }
}