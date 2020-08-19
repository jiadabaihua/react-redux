import React from 'react';
import {Drawer,Modal,Popover} from '@beisen-phoenix/mobile-popup';
import './demo.css';
const CmpMap = {
  'drawer':Drawer,
  'modal':Modal,
  'popover':Popover
}
export default class Demo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type:'drawer',
      popup:{
        visible:false,
        width:'100%',
        height:'100%',
        placement:'left',
        onClose:this.closePopup
      }
    }
    this.closePopup = this.closePopup.bind(this);
  }
  popConfig={
    drawer:{
      visible:true,
      width:'100%',
      height:'100%',
      maxHeight:'100%',
      placement:'left',
      onClose:this.closePopup
    }
    ,modal:{
      visible:true,
      width:'80%',
      height:'20%',
      onClose:this.closePopup
    }
    ,popover:{
      visible:true,
      width:'60%',
      height:'200px',
      onClose:this.closePopup
    }
  }

  closePopup=()=>{
    this.setState(state=>{
      state.popup.visible = false;
      return state;
    })
  }

  showPopup(type,e){
    e.preventDefault();
    e.stopPropagation();
    let offset = e.currentTarget.getBoundingClientRect();
    this.setState(state=>{
      state.type = type;
      state.popup = this.popConfig[type];
      if(type==='popover'){
        state.popup.align=[offset.top-10,offset.left+10];
      }
      state.popup.onClose=this.closePopup
      state.popup.visible = true;
      return state;
    })
  }

  changePlacement=(e)=>{
    let index = e.target.options.selectedIndex;
    const placeArr = ['left','right','top','bottom'];
    this.state.popup.placement = placeArr[index];
  }

  render(){
    const Cmp = CmpMap[this.state.type];
    return (
      <div className='demo'>
          <div className='nav-bar'>
              <span>
                <span style={{marginRight:'10px'}} onClick={this.showPopup.bind(this,'drawer')}>Drawer</span>
                <select className='select-box' onChange={this.changePlacement}>
                  <option>left</option>
                  <option>right</option>
                  <option>top</option>
                  <option>bottom</option>
                </select>
              </span>
              <span style={{marginRight:'10px'}} onClick={this.showPopup.bind(this,'modal')}>Modal</span>
              <span style={{marginRight:'100px'}} onClick={this.showPopup.bind(this,'popover')}>Popover</span>
          </div>
          <div className='loading'>

          </div>
          <Cmp {...this.state.popup}>
            <span onClick={this.closePopup}>关闭</span>
            <h1 style={{color:'red'}}>dsdsdsdsdsdsdsdsds</h1>
            <TestCmp name={'hhhh'} onClick={()=>{alert(1)}} />
          </Cmp>
      </div>
    )
  }
}

class TestCmp extends React.Component {
 render(){
  return (
    <div onClick={this.props.onClick}>
      {this.props.name}
    </div>
  )
 }
}