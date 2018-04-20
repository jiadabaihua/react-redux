import React from "react";
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import * as allActions from "../../redux/actions";
import { PageButton } from "../../components/index";
import Card from "../../components/Card";
import '../../style/detail.css';
// import * as fetchApi from './api/fetchHead';
// import FetchPromise from './api/fetchMethod';
// @connect(state => ({ ...state.homeReducer.toJS() }), { ...allActions })
// @testTarget
function mapStateToProps(state) {
  return {
    test: state.homeReducer.toJS()
  };
}
class Home extends React.Component {
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
    window.addEventListener('message',function(e,data){
      debugger
  })
    // this.setState({test:1},()=>{

    // })
    // this.getHomeInfo();
  }

  // getHomeInfo(){
  //     let arg={
  //         name:'text',
  //         value:'11111'
  //     }
  //     FetchPromise(fetchApi.GetHomeInfo,arg)
  //         .then(res=>{
  //             console.log(1)
  //         })
  //         .catch(err=>{
  //             console.log(err);
  //         })
  // }

  handlePageChange = (e, page) => {
    this.setState({});
  };

  // ReactDOM.render(
  //   <div ref="box" className="box">
  //      <div className='left'></div>
  //      <div className='right'></div>
  //      <Card />
  //     </div>
  //     ,document.getElementById("jyq")
  // )
  render() {
    let { btnGroup } = this.state;
    return (
      <div>
        1111111
        <iframe src='aa.html'></iframe>
      </div>
    );
  }
}

// function testTarget(target){
//     console.log(123);
//     target.componentDidMount=function(){
//         return false
//     }
// }
export default connect(mapStateToProps, allActions)(Home);
