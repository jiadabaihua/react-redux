import Immutable from 'immutable';
import {
  CHANGEVALUE,
  REPO_SUCCESS,
  REPO_FAILURE
} from '../actions';

const initialState=Immutable.fromJS({
    text:6
});
export default function test(state=initialState,action={}){
    switch(action.type){
      case CHANGEVALUE:
        return {
          text:action.value
        }
      case REPO_SUCCESS:
        return {
          response:action.response
        }
      case REPO_FAILURE:
          
      default:
        return state;
    }
  }