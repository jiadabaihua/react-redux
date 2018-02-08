import React from 'react';
import {connect} from 'react-redux';
import * as allActions from '../../redux/actions';
import {PageButton} from '../../components/index';
import Card from '../../components/Card';
import * as fetchApi from './api/fetchHead';
import FetchPromise from './api/fetchMethod';
@connect(
    state=>({...state.homeReducer.toJS()})
    ,{...allActions}
)
// @testTarget 
// function mapStateToProps(state) {
//     return{
//         test:state.homeReducer.toJS()
//     }
// }
export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            btnGroup:[{
                text:'首页',
                pageName:'home'
            },{
                text:'详情页',
                pageName:'detail'
            }]
        }
        this.handlePageChange=this.handlePageChange.bind(this);
    }
    componentWillMount(){
        
    }
    componentDidMount(){
        // this.getHomeInfo();
    }

    getHomeInfo(){
        let arg={
            name:'text',
            value:'11111'
        }
        FetchPromise(fetchApi.GetHomeInfo,arg)
            .then(res=>{
                console.log(1)
            })
            .catch(err=>{
                console.log(err);
            })
    }
    handlePageChange=(e,page)=>{

    }
    render(){
        let {btnGroup}=this.state;
        return (<div ref="box" className="box">
                    {
                        btnGroup.map((target,index)=>
                            (<PageButton key={index} {...target} handlePageChange={this.handlePageChange}/>)
                        )
                    }
                    <div>
                        {/* <Card /> */}
                    </div>
               </div>)
    }
    
}

// function testTarget(target){
//     console.log(123);
//     target.componentDidMount=function(){
//         return false
//     }
// }
// export default connect(mapStateToProps, allActions)(Home)