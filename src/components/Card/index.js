import React from 'react';
import './card.css';
export default class Card extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<ul>
                    <li className="benefits-item">
                        <div className="flipper">
                            <div className="abstract">
                                <h4>破除人才壁垒</h4>
                                <p>从遥不可及到触手可及 让机器学习更简单易用</p>
                            </div>
                            <div className="des">
                                <div className="middle des-content">
                                    <h4>破除人才壁垒</h4>
                                    <ul>
                                        <li>友好的图形交互界面，用户可通过拖拽方式零编码定义建模全过程</li>
                                        <li>多项专利算法，如高维离散嵌入式树网络算法、线性分型分类算法等，高效利用样本数据，即使不做特征工程也能获得最佳模型</li><li>自动调参，自动特征工程等多种专利技术，让用户无需深入理解算法原理，系统可以帮您选出最佳配置</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
               </ul>)
    }
}