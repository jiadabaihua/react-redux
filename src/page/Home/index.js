import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as allActions from "../../redux/actions";
import { PageButton } from "../../components/index";
import i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import Card from "../../components/Card";
import Form from '../../components/Form';
import ImmutableCmp from '../../components/ImmutableCmp';
import MyComponent from '../../components/Test';
import DataTable from '../../components/Table';
import i18nConfig from '../../config';
import '../../style/detail.css';
const myContext = React.createContext();
const appRoot = document.getElementById('jyq');
@connect( 
  state=>({...state.homeReducer}), 
  (dispatch)=>({actions:bindActionCreators(allActions,dispatch)}) 
)
export default class Home extends React.Component {
  static contextType = myContext;
  constructor(props) {
    super(props);
    this.state = {
      mutation:[],
      text:'dfdfd',
      btnGroup: [
        {
          text: "首页",
          pageName: "home"
        },
        {
          text: "详情页",
          pageName: "detail"
        }
      ]
    };
    this.el = document.createElement('div');
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {
    i18next.init({
      lng: 'en',
      debug: true,
      resources: {
        en: {
          translation: {
            "key": "hello world"
          }
        }
      }
    }, function(err, t) {
      // initialized and ready to go!
      document.getElementById('output').innerHTML = i18next.t('key');
    });
    
    // document.querySelector('#side-node').appendChild(this.el);
  }

  handlePageChange = (e, page) => {
    
  };

  dispatchAction(){
    this.setState({})
    // this.setState({mutation:[1,2,3]});//测试组件内部state更改会不会引起子组件的更新（不会）
    // this.forceUpdate();
    // this.props.actions.firstTest()
  }
  goToDetailPage(){
    location.href='#/detail';
  }
  addNode(){
    //即使是新增节点，setState也不会使子组件更新，不会影响到子组件
    let {mutation}=this.state;
    return mutation.map((v,index)=>{
      return (<div key={index}>11111</div>)
    })
  }
  update(){
    this.setState({ text: this.state.text + 'fff' });
  }
  render() {
    let { btnGroup,text } = this.state; 
    
    // return 'ddddddddddddddddddd'
    // return [<div className='aaaa'>1111</div>,<span>22222</span>]
    return (
        <React.Fragment>
          <Card text={text} />
          <div>1111111111ddddddd</div>
          <button onClick={::this.update}>测试API</button>
          <div id='output'></div>
          <DataTable />
        </React.Fragment>
    )
    return ReactDOM.createPortal(
      <Child />,
      this.el
    )

    return (
      <div>
        {this.addNode()}
        <button onClick={::this.dispatchAction}>触发action</button>
        <button onClick={::this.goToDetailPage}>去详情页</button>
        <Card text={'ddd'}/>
      </div>
    );
  }
}

class Child extends React.Component{
  record(){
    // console.log(1)
  }
  render(){
    return (
      <div>
        <div className='child-node' onClick={::this.record}>哈哈哈哈</div>
        
      </div>
    ) 
  }
}