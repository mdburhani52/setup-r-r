import {postData} from './index';
import * as actionType from './ActionTypes';

export const getData = (data) => {
    return dispatch => {
        return dispatch(postData('users', data))
        .then(res => {
            dispatch(saveData(res));
            return res;
        })      
    }
    function saveData(data) { return { type: actionType.ACTION1, payload: data } }
}
