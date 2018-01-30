import React, {Component, PropTypes} from 'react'
import {render} from 'react-dom'
var $ = go.GraphObject.make;
import App from './src/index.js';
import './index.scss' //缩略图样式

//结点元数据
let datascource = 
      [
        {"Id": '1_1', "name":"刘恺威", "title":"CEO", "partment": "市场部", level: 1,"aimsTitle":"支撑公司销售业绩实现支撑公司销售业绩实现支撑公司销售业绩实现"},
        {"Id": '2_1', "name":"赵戴明", "title":"VP Marketing/Sales", "partment": "市场部", "SuperId":'1_1', level: 2,"aimsTitle":"支撑公司销售业绩实现支撑公司销售业绩实现支撑公司销售业绩实现"},
        {"Id": '3_1', "name":"刘恺威", "title":"Sales", "partment": "市场部", "SuperId":'2_1', level: 3,"aimsTitle":"支撑公司销售业绩实现"},
        {"Id": '4_1', "name":"赵戴明", "title":"VP Engineering","partment": "市场部",  "SuperId":'1_1', level: 2,"aimsTitle":"支撑公司销售业绩实现"},
        {"Id": '5_1', "name":"刘恺威", "title":"Manufacturing", "partment": "市场部", "SuperId":'4_1', level: 2,"aimsTitle":"支撑公司销售业绩实现"},
        {"Id": '6_1', "name":"赵戴明", "title":"Marketing", "partment": "市场部", "SuperId":'2_1', level: 2,"aimsTitle":"支撑公司销售业绩实现"},
        {"Id": '7_1', "name":"王小春", "title":"Sales Rep", "partment": "市场部", "SuperId":'3_1', category: "Card", level: 4,"aimsTitle":"支撑公司销售业绩实现"},
        {"Id": '8_1', "name":"汪龙", "title":"Project Mgr", "partment": "市场部", "SuperId":'5_1', category: "Card", level: 2, color:'red',"aimsTitle":"支撑公司销售业绩实现"},
        // {"key":9, "name":"李晓德", "title":"Events Mgr", "partment": "市场部", "parent":6, category: "Card"},
        // {"key":10, "name":"赵戴明", "title":"Engineering", "partment": "市场部", "parent":4},
        // {"key":11, "name":"刘恺威", "title":"Process", "partment": "市场部", "parent":5, category: "Card"},
        // {"key":12, "name":"刘恺威", "title":"Software", "partment": "市场部", "parent":10, category: "Card"},
        // {"key":13, "name":"赵戴明", "title":"Testing", "partment": "市场部", "parent":10, category: "Card"},
        // {"key":14, "name":"赵戴明", "title":"Hardware", "partment": "市场部", "parent":10, category: "Card"},
        // {"key":15, "name":"赵戴明", "title":"Quality", "partment": "市场部"},
        // {"key":16, "name":"李晓德", "title":"Sales Rep", "partment": "市场部"},
        // //{"key":17, "name":"李晓德", "title":"Wardrobe Assistant", "isAssistant":true, "partment": "市场部", "parent":1},
        // {"key":18, "name":"王小春", "title":"Engineering Assistant", "parent":10, "partment": "市场部", category: "Card"},
        // {"key":19, "name":"王小春", "title":"Quality", "partment": "市场部", "parent":15, category: "Card"},
        // {"key":20, "name":"王小春", "title":"Sales Rep", "partment": "市场部", "parent":16, category: "Card"},
        // {"key":21, "name":"王小春", "title":"Quality","partment": "市场部",  "parent":19, category: "Card"},
        // {"key":22, "name":"赵戴明", "title":"Sales Rep","partment": "市场部",  "parent":19,category: "Terminal"},
        // {"key":23, "name":"赵戴明", "title":"VP Engineering","partment": "市场部",  "parent":1},
        // {"key":24, "name":"赵戴明", "title":"VP Engineering","partment": "市场部",  "parent":1},
        // {"key":25, "name":"赵戴明", "title":"VP Engineering","partment": "市场部",  "parent":1},
        // {"key":26, "name":"赵戴明", "title":"VP Engineering","partment": "市场部",  "parent":1},

        // {"key":23, "name":"Anita Hammer", "title":"Process", "parent":10},
        // {"key":24, "name":"Billy Aiken", "title":"Software", "parent":10},
        // {"key":25, "name":"Stan Wellback", "title":"Testing", "parent":10},
        // {"key":26, "name":"Marge Innovera", "title":"Hardware", "parent":10},
        // {"key":5, "name":"Saul Wellingood", "title":"Manufacturing", "parent":2},
        // {"key":6, "name":"Al Ligori", "title":"Marketing", "parent":2},
        // {"key":7, "name":"Dot Stubadd", "title":"Sales Rep", "parent":2},
        // {"key":8, "name":"Les Ismore", "title":"Project Mgr", "parent":2},
        // {"key":9, "name":"April Lynn Parris", "title":"Events Mgr", "parent":2},
        // {"key":10, "name":"Xavier Breath", "title":"Engineering", "parent":2},
        // {"key":11, "name":"Anita Hammer", "title":"Process", "parent":2},
        // {"key":12, "name":"Billy Aiken", "title":"Software", "parent":2},
        // {"key":13, "name":"Stan Wellback", "title":"Testing", "parent":2},
        // {"key":14, "name":"Marge Innovera", "title":"Hardware", "parent":2},
        // {"key":15, "name":"Evan Elpus", "title":"Quality", "parent":2},
        // {"key":16, "name":"Lotta B. Essen", "title":"Sales Rep", "parent":2},
        // {"key":17, "name":"Joaquin Closet", "title":"Wardrobe Assistant", "isAssistant":true, "parent":2},
        // {"key":18, "name":"Hannah Twomey", "title":"Engineering Assistant", "parent":2, "isAssistant":true},
        // {"key":19, "name":"Evan Elpus", "title":"Quality", "parent":2},
        // {"key":20, "name":"Lotta B. Essen", "title":"Sales Rep", "parent":2},
        // {"key":21, "name":"Evan Elpus", "title":"Quality", "parent":2},
        // {"key":22, "name":"Lotta B. Essen", "title":"Sales Rep", "parent":2}
       ];



//图表父容器样式
let customStyle = {
  'backgroundColor': '#DAE4E4', 
  'height': '800',
  'width' : '1000'
}

//用数据表示的link模板--曲线
let curveTemplate = {
  type: go.Link,
  attributes: {
    style: {
      
    }
  },
  children: [
    {
      type: go.Shape,
      attributes: {
        style: {
          toArrow: "OpenTriangle", 
          fill: null, 
          strokeWidth: 2, 
          stroke: "#00a4a4" 
        },
        props: {
          bindModel: []
        }
        
      },
      children: []
    },
    {
      type: go.Shape,
      attributes: {
        style: {
          toArrow: "OpenTriangle", 
          fill: null, 
          strokeWidth: 2, 
          stroke: "#00a4a4" 
        },
        props: {
          bindModel: []
        }
        
      },
      children: []
    }
  ]
}
//直线
let linkTemplate = {
  type: go.Link,
  category: go.Link.Orthogonal,
  attributes: {
    style: {
      corner: 1, 
      relinkableFrom: true, 
      relinkableTo: true
    },
    props: {
      bindModel: []
    },
    events: {}
  },
  children: [
    {
      type: go.Shape,
      attributes: {
        style: {
          strokeWidth: 1, 
          stroke: "#f48b00"
        },
        props: {
          bindModel: [
          // {
          //   text: 'name'
          // }
          ]
        },
        events: {
          //doubleClick: 'onItemdoubleClick'
        }
      },
      children: []
    }
  ]
}

class Demo extends Component{
	constructor(props) {
		super(props);

		this.state = {
			angle: 90,
      isCurveLine: false,
      lineData: linkTemplate,
      scale: 1
		}
	}
  //横竖排列转换
  turnT2B = () => {
  	if (this.state.angle === 0) {
  		this.state.angle = 90;
  	} else {
  		this.state.angle = 0;
  	}
  	this.setState(this.state)
  }

  //直线/曲线转换
  turnLine = () => {
    let { isCurveLine, lineData } = this.state

    if (isCurveLine) {
      this.setState({lineData: linkTemplate, isCurveLine: !isCurveLine})
    } else {
      this.setState({lineData: curveTemplate, isCurveLine: !isCurveLine})
    }
  }

  //结点双击
  nodeDoubleClick = (e, obj) => {
    var node = obj.part;
    if (node !== null) {
      // if (node.isSelected && !node.isTreeExpanded) {
      //   node.isTreeExpanded = false
      // }
      var node1 = node.diagram.selection.first();
      
      if (node1 !== null) {
        
          // make sure the selected node is in the viewport
          node.diagram.scrollToRect(node1.actualBounds);
          // move the large yellow node behind the selected node to highlight it
          //highlighter.location = node.location;
          // create a new model for the local Diagram
          var model = new go.TreeModel();
          // add the selected node and its children and grandchildren to the local diagram
          var nearby = node1.findTreeParts(2);  // three levels of the (sub)tree
          // add parent and grandparent
          var parent = node1.findTreeParentNode();
          if (parent !== null) {
            nearby.add(parent);
          }
          // create the model using the same node data as in myFullDiagram's model
          nearby.each(function(n) {
            if (n instanceof go.Node) model.addNodeData(n.data);
          });
          node.diagram.model = model;
          // select the node at the diagram's focus
          //var selectedLocal = node.diagram.findPartForKey(node1.data.key);
          node.isSelected = true;
        }
    }
  }
  //编辑
  handleEdit = (e, obj) => {
    alert("编辑")
  }

  //跳转 
  handleRediret = (v, obj) => {
    window.open("http://www.baidu.com")
  }

  //新建节点
  handleNewItem = (e, obj) => {
    let node = obj.part;
    if (node !== null) {
      let thisemp = node.data;
      node.diagram.startTransaction("add employee");
      let newemp = { key: this.getNextKey(node.diagram), name: "(new person)", title: "", parent: thisemp.key };
      node.diagram.model.addNodeData(newemp);
      node.diagram.commitTransaction("add employee");
    }
  }

  //处理高亮
  handleHighlighted = (h) => {
    return h ? "#F44336" : "#A7E7FC";
  }

  handleTitle = (h) => {
    return "title:" + h
  }

  //缩放
  changeScale = () => {
    let scale = document.getElementById("scale").value;
    scale = parseFloat(scale);
    if (scale > 0) {
      this.setState({scale: scale})
    }
  }
  //搜索节点
  searchDiagram = () => {
    // const input = document.getElementById("mySearch");
    // if (!input) return;
    // input.focus();

    // diagram.startTransaction("highlight search");

    // if (input.value) {
    //   const regex = new RegExp(input.value, "i");
    //   const results = diagram.findNodesByExample({ name: regex },
    //                                              { key: regex },
    //                                              { title: regex }
    //                                             );
    //   diagram.highlightCollection(results);
    //   if (results.count > 0) diagram.centerRect(results.first().actualBounds);
    // } else {  
    //   diagram.clearHighlighteds();
    // }
    // diagram.commitTransaction("highlight search");
  }

  //生成图片
  generateImages = () => {
    //const { diagram } = this.modelData
    // let width = 3000;
    // let height = 3000;
    // width = parseInt(width);
    // height = parseInt(height);
    // if (isNaN(width)) width = 800;
    // if (isNaN(height)) height = 800;
    // // Give a minimum size of 50x50
    // width = Math.max(width, 50);
    // height = Math.max(height, 50);

    // let imgDiv = document.getElementById('myImages');
    // imgDiv.innerHTML = ''; 
    // const db = diagram.documentBounds.copy();
    // const boundswidth = db.width;
    // const boundsheight = db.height;
    // const imgWidth = width;
    // const imgHeight = height;
    // const p = db.position.copy();
    // let img;
    // for (var i = 0; i < boundsheight; i += imgHeight) {
    //   for (var j = 0; j < boundswidth; j += imgWidth) {
    //     img = diagram.makeImage({
    //       scale: 1,  
    //       position: new go.Point(p.x + j, p.y + i),
    //       size: new go.Size(imgWidth, imgHeight)
    //     });
        
    //     img.className = 'images';
    //     imgDiv.appendChild(img);
    //     imgDiv.appendChild(document.createElement('br'));
    //   }
    // }
    
    // let a = document.createElement('a');
    // const filename = 'orgchart.png';
    // a.href = img.src;
    // a.download = filename;
    // a.click();
  }

  //展开收起
  handleExpand = (e, obj) => {
    e.diagram.startTransaction();
    var node = obj.part;
    if (node.data.isCollapsed) {
      this.expandFrom(node, node);
    } else {
      this.collapseFrom(node, node);
    }
    e.diagram.commitTransaction("toggled visibility of dependencies");
  }

  collapseFrom = (node, start) => {
    if (node.data.isCollapsed) return;
    node.diagram.model.setDataProperty(node.data, "isCollapsed", true);
    if (node !== start) node.visible = false;
    node.findNodesOutOf().each(this.collapseFrom);
  }

  expandFrom = (node, start) => {
    if (!node.data.isCollapsed) return;
    node.diagram.model.setDataProperty(node.data, "isCollapsed", false);
    if (node !== start) node.visible = true;
    node.findNodesOutOf().each(this.expandFrom);
  }
    
  nodeIdCounter = -1; 
  getNextKey = (diagram) => {
    let key = this.nodeIdCounter;
    while (diagram.model.findNodeDataForKey(key) !== null) {
      key = this.nodeIdCounter--;
    }
    return key;
  }

  showDialog=(e,obj)=>{
    const {screenX,screenY}=e.event;
    this.refs["dialog"].style.display='block'
    this.refs["dialog"].innerText='哈哈哈哈';
    this.refs["dialog"].style.top=(screenY+50)+'px';
    this.refs["dialog"].style.left=screenX+'px';
  }
  hideDialog=(e)=>{
    this.refs["dialog"].style.display='none';
  }
  render () {
    let nodeTemplate = {
      type: go.Node,
      category: 'Vertical',
      attributes: {
        style: {},
        events: {
          // doubleClick: 'onNodeDoubleClick'
        }
      },
      children: [
        {
          type: go.Panel, 
          category: 'Auto',
          attributes: {
            style: {},
            events: {
              doubleClick: 'onNodeDoubleClick'
            }
          },
          children: [
            {
              type: go.Shape,
              category: 'RoundedRectangle',
              attributes: {
                style: {
                  fill: $(go.Brush, "Linear", { 0: "white", 1: "lightblue" }),//背景渐变
                  // fill: $(go.Spot, { 0: "white", 1: "lightblue" }),
                  stroke: "gray", //边框
                  strokeWidth: 1,//边框宽度
                  spot1: go.Spot.TopLeft, 
                  spot2: go.Spot.BottomRight,
                },
                props: {
                  bindModel: [{
                    key: 'fill',
                    value: "isHighlighted",
                    handleFun: 'handleHighlighted'
                  },{
                    key: 'height',
                    value: "300"
                  }]
                }
              },
              children: []
            },
            {
              type: go.Panel, 
              category: "Table",
              attributes: {
                style: {
                  defaultAlignment: go.Spot.Left, 
                  margin: 6, 
                  maxSize: new go.Size(300, 108),
                  // defaultRowSeparatorStroke: "black"
                },
                props: {
                  bindModel: [{
                    key: 'fill',
                    value: "isHighlighted",
                    handleFun: 'handleHighlighted'
                  }]
                },
                events: {
                }
              },
              children: [
                {
                  type: go.TextBlock,
                  attributes: {
                    style: {
                      row: 1, 
                      column: 0, 
                      // columnSpan: 2, 
                      // alignment: go.Spot.Center, 
                      font: "normal 10pt sans-serif" ,
                      // stroke: "blue",
                      isMultiline: false,
                      maxSize: new go.Size(200, 80)
                    },
                    props: {
                      //text: 'abc',
                      bindModel: [{
                        key: 'text',
                        value: "aimsTitle",
                        //handleFun: 'handleTitle'
                      }]
                    }
                  }
                },
                {
                  type:"PanelExpanderButton",
                  attributes:{
                    style:{
                      row:1,
                      column:1,
                      alignment:go.Spot.Right
                    }
                    ,events:{
                      
                    }
                  }
                }
                ,{
                  type:go.Shape,
                  attributes:{
                    style:{
                      row:2,
                      column:0,
                      name: "SHAPE",
                      width:'200',
                      height:'0.5',
                      stroke: "#C2185B",
                      fill: "#F48FB1",
                      strokeWidth: 3
                    },
                    props:{
                      bindModel:[{
                        key:'height',
                        value:'0.5'
                      }]
                    }
                  }
                }
                // ,
                // {
                //   type: go.TextBlock,
                //   attributes: {
                //     style: {
                //       row: 3, 
                //       column: 0, 
                //       // columnSpan: 2, 
                //       // alignment: go.Spot.Center, 
                //       font: "normal 10pt sans-serif" 
                //     },
                //     props: {
                //       //text: 'abc',
                //       bindModel: [{
                //         key: 'text',
                //         value: "name",
                //         //handleFun: 'handleTitle'
                //       }]
                //     }
                //   }
                // },
                // {
                //   type: go.TextBlock,
                //   attributes: {
                //     style: {
                //       row: 4, 
                //       column: 0, 
                //       // columnSpan: 2, 
                //       // alignment: go.Spot.Center, 
                //       font: "normal 10pt sans-serif",
                //       // 'fill': 'red'

                //     },
                //     props: {
                //       //text: 'abc',
                //       bindModel: [{
                //         key: 'text',
                //         value: "SuperId"
                //         //handleFun: 'handleTitle'
                //       }]
                //     }
                //   }
                // },
                ,{
                  type:go.Panel,
                  category:'Horizontal',
                  attributes:{
                    style:{
                      row: 3, 
                      column: 0,
                    },
                    events:{}
                  },
                  children:[{
                    type: go.Picture,
                    attributes: {
                      style: {
                        name:'Picture',
                        desiredSize:new go.Size(30, 30),
                        margin: new go.Margin(6, 8, 6, 10)
                      },
                      props: {
                        //text: 'abc',
                        source: "//stcms.beisen.com/Image/100013/b80fb66ee91b47659f613b04bc06773d_m.jpg",
                        bindModel: []
                      }
                    }
                  },{
                    type:go.Panel,
                    category:'Table',
                    attributes:{
                        style:{
                          defaultAlignment: go.Spot.Left, 
                          margin: 6, 
                          maxSize: new go.Size(100, 50)
                        }
                    },
                    props:{
                      bindModel:[{
                        key: 'box',
                        value: "viewBox",
                      }]
                    },
                    children:[{
                      type:go.TextBlock,
                      attributes:{
                        style:{
                          row:1,
                          column:0,
                          alignment: go.Spot.Left, 
                          font: "normal 10pt sans-serif" 
                        }
                        ,props:{
                          bindModel:[{
                            key:'text',
                            value:'name'
                          }]
                        }
                      }
                    },{
                      type:go.Picture,
                      attributes:{
                        style:{
                          row:1,
                          column:1,
                          desiredSize:new go.Size(15, 15),
                          // margin: new go.Margin(6, 8, 6, 10)
                        }
                        ,events:{
                          mouseEnter:'onShowDialog',
                          mouseLeave:'onHideDialog'
                        }
                        ,props:{
                          source: "//stcms.beisen.com/Image/100013/b80fb66ee91b47659f613b04bc06773d_m.jpg",
                          bindModel:[]
                        }
                      }
                    },{
                      type:go.TextBlock,
                      attributes:{
                        style:{
                          row:2,
                          column:0,
                          alignment: go.Spot.Left, 
                          font: "normal 10pt sans-serif" 
                        }
                        ,props:{
                          bindModel:[{
                            key:'text',
                            value:'partment'
                          }]
                        }
                      }
                    }]
                  }]
                }
                // {
                //   type: "Button",
                //   attributes: {
                //     style: {
                //       row: 2, 
                //       column: 2
                //     },
                //     props: {
                //       bindModel: {
                //         text: "name"
                //       }
                //     },
                //     events: {
                //       click: 'onHandleEdit',
                //     }
                //   },
                //   children: [
                //     {
                //       type: go.TextBlock,
                //       attributes: {
                //         style: { 
                //           font: "9pt  Segoe UI,sans-serif", 
                //           stroke: "blue"
                //         },
                //         props: {
                //           text: '编辑',
                //           bindModel: {
                //             //text: "name"
                //           }
                //         }
                //       }
                //     }
                //   ]
                // },
                // {
                //   type: "Button",
                //   attributes: {
                //     style: {
                //       row: 2, 
                //       column: 3
                //     },
                //     props: {
                //       bindModel: {
                //         text: "name"
                //       }
                //     },
                //     events: {
                //       click: 'onHandleNewItem',
                //     }
                //   },
                //   children: [
                //     {
                //       type: go.TextBlock,
                //       attributes: {
                //         style: { 
                //           font: "9pt  Segoe UI,sans-serif", 
                //           stroke: "blue"
                //         },
                //         props: {
                //           text: '新建',
                //           bindModel: {
                //             //text: "name"
                //           }
                //         }
                //       }
                //     }
                //   ]
                // },
                // {
                //   type: "Button",
                //   attributes: {
                //     style: {
                //       row: 2, 
                //       column: 4
                //     },
                //     props: {
                //       bindModel: {
                //         text: "name"
                //       }
                //     },
                //     events: {
                //       click: 'onHandleRediret',
                //     }
                //   },
                //   children: [
                //     {
                //       type: go.TextBlock,
                //       attributes: {
                //         style: { 
                //           font: "9pt  Segoe UI,sans-serif", 
                //           stroke: "blue"
                //         },
                //         props: {
                //           text: '跳转',
                //           bindModel: {
                //             //text: "name"
                //           }
                //         }
                //       }
                //     }
                //   ]
                // },
                // {
                //   type: "Button",
                //   attributes: {
                //     style: {
                //       row: 2, 
                //       column: 5
                //     },
                //     props: {
                //       bindModel: {
                //         text: "name"
                //       }
                //     },
                //     events: {
                //       click: 'onHandleExpand',
                //     }
                //   },
                //   children: [
                //     {
                //       type: go.TextBlock,
                //       attributes: {
                //         style: { 
                //           font: "9pt  Segoe UI,sans-serif", 
                //           stroke: "blue"
                //         },
                //         props: {
                //           text: '展/收',
                //           bindModel: {
                //             //text: "name"
                //           }
                //         }
                //       }
                //     }
                //   ]
                // },
                // {
                //   type: go.TextBlock,
                //   attributes: {
                //     style: {
                //       row: 2, 
                //       column: 0, 
                //       font: "bold 12pt sans-serif" 
                //     },
                //     props: {
                //       //text: 'abc',
                //       bindModel: {
                //         key: 'text',
                //         value: "title",
                //         handleFun: 'handleTitle'
                //       }
                //     }
                //   }
                // },
              ]
            }
          ]
        }
        ,{
          type:go.Panel,
          attributes:{
            style:{
              height:15
            }
          },
          children:[
            {
              type: "TreeExpanderButton", 
              attributes: {
                style: {
                  // alignment: go.Spot.Bottom, 
                  // alignmentFocus: go.Spot.Left,
                },
                props: {
                  bindModel: []
                }
              }
            }
          ]
        }
      ]
    }
  
    //其他模板结构
    let otherNodeTemplates = [
      {
        name: 'Terminal',
        content: {
          type: go.Node,
          category: 'Spot',
          attributes: {
            style: {
              deletable: false 
            },
            events: {
            }
          },
          children: [
            {
              type: go.Shape,
              category: 'Circle',
              attributes: {
                style: {
                  fill: $(
                    go.Brush, 
                    "Linear", 
                    { 
                      0: "white", 
                      1: "lightblue" 
                    }
                  ),
                  stroke: "darkblue", strokeWidth: 2 
                },
                events: {
                }
              }
            },
            {
              type: go.TextBlock,
              category: 'Circle',
              attributes: {
                style: {
                  font: "10pt Verdana, sans-serif"
                },
                events: {
                },
                props: {
                  bindModel: [{
                    key: "text",
                    value: 'title'
                  }]
                }
              }
            }
          ]
        }
      },
      {
        name: 'Card',
        content: {
          type: go.Node,
          category: 'Auto',
          attributes: {
            style: {

              isShadowed: true
            },
            events: {
            }
          },
          children: [
            {
              type: go.Shape,
              category: 'RoundedRectangle',
              attributes: {
                style: {
                  fill: 'azure',
                  // fill: $(go.Brush, "Linear", { 0: "white", 1: "lightblue" }),
                  stroke: "gray", 
                  strokeWidth: 1
                },
                events: {
                }
              }
            },
            {
              type: go.Panel,
              category: 'Table',
              attributes: {
                style: {
                  margin: 4, 
                  maxSize: new go.Size(86, 33)
                },
                events: {
                },
                props: {
                  bindModel: []
                }
              },
              children: [
                {
                  type: go.RowColumnDefinition,
                  // category: 'Rectangle',
                  attributes: {
                    style: {
                      column: 0,
                      stretch: go.GraphObject.Horizontal,
                      alignment: go.Spot.Left
                    },
                    events: {
                    }
                  }
                },
                {
                  type: go.TextBlock,
                  // category: 'Table',
                  attributes: {
                    style: {
                      row: 0, 
                      column: 0,
                      maxSize: new go.Size(120, NaN), 
                      margin: 2,
                      font: "8pt sans-serif",
                      alignment: go.Spot.Top
                    },
                    events: {
                    },
                    props: {
                      bindModel: [{
                        key: 'text',
                        value: "partment"
                      },
                      {
                        key: 'stroke',
                        value: "color"
                      }]
                    }
                  }
                },
                {
                  type: go.TextBlock,
                  // category: 'Table',
                  attributes: {
                    style: {
                      row: 1, 
                      column: 0, 
                      // columnSpan: 2,
                      font: "8pt sans-serif",
                      margin: 2,
                      visible: true  //可以控制该文本显示或隐藏
                    },
                    events: {
                    },
                    props: {
                      bindModel: [{
                        key: 'text',
                        value: "name"
                      }]
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    ]
    
    return (
    	<div>
    		<button className="base-bg-ripple" onClick={this.turnT2B.bind(this)}>上/左排列</button>
    		<button className="base-bg-ripple" onClick={this.turnLine.bind(this)}>直/曲线</button>
        <input type="text" id="scale" />
        <button onClick={this.changeScale.bind(this)} >缩放</button>
        {/*<input type="search" id="mySearch" />
        <button onClick={this.searchDiagram.bind(this)}>搜索</button>
        <button id="makeImages" onClick={this.generateImages.bind(this)}>生成图片</button>
        <div id="myImages"></div> */}
        <div style={{position:"relative"}}>
          <div className='jiayunqiu' ref="dialog"></div>
          <App 
            data={datascource} 
            angle={this.state.angle} 
            scale={this.state.scale}
            style={customStyle} 
            linkTemplate={this.state.lineData} 
            otherNodeTemplates={otherNodeTemplates}
            nodeTemplate={nodeTemplate}
            isShowOverview={true}
            parentProperty={'SuperId'}
            keyProperty={'Id'}
            levelNumber={3}
            onNodeDoubleClick={this.nodeDoubleClick}
            onHandleEdit={this.handleEdit}
            onHandleNewItem={this.handleNewItem}
            onHandleRediret={this.handleRediret}
            onHandleExpand={this.handleExpand}
            onShowDialog={this.showDialog}
            onHideDialog={this.hideDialog}
            handleHighlighted={this.handleHighlighted}
            handleTitle={this.handleTitle}/>
          </div>
    	</div>
    )
  }
}
render(<Demo />, document.getElementById('content'))
