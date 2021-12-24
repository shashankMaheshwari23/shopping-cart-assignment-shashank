import axios from "axios";

export default function ApiCall(requestJson,callBack){
    axios(requestJson).then((data)=>{
        if(typeof(callBack)==='function'){
            callBack(data.data);
        }else{
            return data.data
        }
    }).catch((err)=>{
        console.log(err)
    })
}