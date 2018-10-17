export function firstTest(){
	return (dispatch, getState) => {	
		return dispatch({
				type: 'CHANGEVALUE'
				,responese:{result:"ok"}
		});
	};
}

export function test(){
	return (dispatch, getState) => {	
		return dispatch({
				type: 'TEST'
				,responese:{result:"ok"}
		});
	};
}