import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as allActions from "../../redux/actions";
import { PageButton } from "../../components/index";
import Card from "../../components/Card";
import Form from '../../components/Form';
import ImmutableCmp from '../../components/ImmutableCmp';
import '../../style/detail.css';
@connect( state=>({...state.homeReducer}), (dispatch)=>({actions:bindActionCreators(allActions,dispatch)}) )
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount() {

  }

  handlePageChange = (e, page) => {
    this.setState({});
  };

  dispatchAction(){
    this.props.actions.firstTest()
  }
  render() {
    let { btnGroup } = this.state;
    return (
      <div>
        <div className='image-url'></div>
        <button onClick={::this.dispatchAction}>触发action</button>
      </div>
    );
  }
}
