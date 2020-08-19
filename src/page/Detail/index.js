import React from 'react';
import '../../style/detail.css';
export default class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        let flag;
        function animate(){
            flag =false;
            let offsetTop = document.documentElement.scrollTop;
            document.querySelector('.red-bgcolor').style.top = offsetTop + 'px';
        }
        window.addEventListener('scroll',(e)=>{
            if (flag) { return }
            flag = true;
            //动画神器（替代setTimeout，setIntervel，避免卡顿）
            requestAnimationFrame(animate)
        })
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
                    <div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'red'}}>11111111111</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div><div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div style={{backgroundColor:'green'}}>22222222222</div>
                    <div style={{backgroundColor:'blue'}}>3333</div>
                    <div style={{backgroundColor:'yellow'}}>4</div>
                    <div className='red-bgcolor'>scroll</div>
               </div>)
    }
}