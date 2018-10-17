import{
    TextBox,
    DropDownList
} from './components';

class FieldMap{
    constructor(){
        this.fields={
            "TextBox":TextBox,
            "DropDownList":DropDownList
        }
    }

    getFieldByKey(key){
        return this.fields[key]
    }
}

export default FieldMap;