import React from 'react';
const HocForm =(OriginComp)=>{
    return class extends React.Component{
        constructor(props){
            super(props)
            this.handleChange=this.handleChange.bind(this);
            this.getFieldConfig=this.getFieldConfig.bind(this);
        }

        handleChange(){

        }
        getFieldConfig(){

        }
        render(){
            return(
                <div>
                    <OriginComp onChange={this.handleChange} {...this.props} getFieldConfig={this.getFieldConfig} />
                </div>
            )
        }
    } 
}

export default HocForm;