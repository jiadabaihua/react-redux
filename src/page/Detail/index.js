import React from 'react';
export default class App extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        fetch('/api/upload', {
            method: 'GET',
            params:{first:1},
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'same-origin'
        }).then(resp=>resp.json())
            .then(respData=>{
                console.log(1)
            })
    }
    render(){
        return <div>detail page!</div>
    }
}