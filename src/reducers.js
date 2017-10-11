const CHANGEVALUE="CHANGEVALUE";
const REPO_SUCCESS="REPO_SUCCESS";
const REPO_FAILURE="REPO_FAILURE";
const initialState={
    text:6
}
export default function test(state=initialState,action={}){
    switch(action.type){
      case CHANGEVALUE:
        return {
          text:action.value
        }
      case REPO_SUCCESS:
       console.log(action.response)
        return {
          response:action.response
        }
      case REPO_FAILURE:
          
      default:
        return state;
    }
  }