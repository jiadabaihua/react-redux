import React from 'react';
import TinyMCE from 'react-tinymce';
import '../utils/langs/zh_CN.js';
export default class Tinymce extends React.Component{
    constructor(props){
        super(props);
    }
    handleEditorChange(e) {
        console.log(e.target.getContent());
    }
    componentDidMount(){
        const buttons2 = "username,endtime,companyname,testurl,loginurl,useremail,serialnumber,starttime,sendtime";
        $('#contentEmail').tinymce({
            script_url: "tiny_mce_js",
            language: 'zh',
            theme: "advanced",
            // verify_html: false,
            // encoding: "xml",
            // cleanup_on_startup: false,
            theme_advanced_resizing_min_height: 200,
            plugins: "username,endtime,companyname,testurl,loginurl,useremail,serialnumber,starttime,sendtime",
            theme_advanced_buttons1: "newdocument,undo,redo,|,forecolor,backcolor,bold,italic,underline,strikethrough,sub,sup,|,justifyleft,justifycenter,justifyright,justifyfull,formatselect,fontselect,fontsizeselect",
            theme_advanced_buttons2: buttons2,
            theme_advanced_buttons3: "",
            theme_advanced_toolbar_location: "top",
            theme_advanced_toolbar_align: "left",
            theme_advanced_statusbar_location: "bottom"
            // theme_advanced_resizing: true,
            //theme_advanced_statusbar_location: "none"
        })
    }
    render() {
        return (
          <div>
              <textarea id='contentEmail' name='elm1' className='tinymce visibilityhidden' style={{width: '600px',height: '300px'}}></textarea>
          </div>
        );
    }
}