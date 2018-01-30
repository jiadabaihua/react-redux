import axios from 'axios';
export default (head,arg)=>{
    const config=head(arg);
    return new Promise((resolve,reject)=>{
        axios(config).then(res=>{
            resolve(res); 
        })
        .catch(err=>{
            reject(err)
        })
    })
}