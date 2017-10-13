export const CHANGEVALUE="CHANGEVALUE";
export const REPO_SUCCESS="REPO_SUCCESS";
export const REPO_FAILURE="REPO_FAILURE";
export function firstTest(){
    let handle=()=>{
		return {
            type:CHANGEVALUE
            ,responese:{result:"ok"}
	  	};
	  }
	return (dispatch, getState) => {
    	return dispatch(handle());
  	};
}