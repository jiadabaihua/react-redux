import React from 'react';
import HocForm from './HocForm';
import FieldMap from './formMap';
@HocForm
export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.field=new FieldMap();
    }

    confirmFieldData(data) {
        let formConfig = {
            fields: {},
            meta: {},
            validate: {}
        };
        data.meta.map(cmp=>{
            cmp.children && cmp.children.map(child => {
                let datasource = child.datasource || [];
                let commonObj = {
                    hidden: false // 是否隐藏
                    , disabled: false // 是否禁用
                    , readonly: child.readonly || false// 是否只读
                    , required: child.required || false// 是否必填
                    , lableText: child.label // 组件title
                    , datasource: datasource
                }
                if(child.defaultValue){
                    formConfig.fields[child.name]={
                        text:child.defaultValue,
                        value:child.defaultValue
                    }
                }
                formConfig.meta[child.name] = commonObj;
                if (child.required && child.hasOwnProperty("validate")) {
                    formConfig.validate[child.name] = { ...child.validate }
                }
            })
        })
        return formConfig;
    }

    componentDidMount(){
        console.log('form');
    }
    renderFormFields(){
        let { data } = this.props;
        let formConfig=this.confirmFieldData(data);
        return(
            <div>11111</div>
        )
    }
    render(){
        return(
            <div>{this.renderFormFields()}</div>
        )
    }
}