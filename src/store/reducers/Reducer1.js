import * as actionType from 'store/actions';

const initialState = {
    data1:null,
    data2:[],
    title:'Hey im coming from reducer 1'
}
  const reducer = (state = initialState, action) => {
    switch (action.type) {
       case actionType.ACTION1:
            return {
                ...state,
                data1: action.payload
            }
      case actionType.ACTION2:
           return {
               ...state,
               data2: action.payload
           }
    }

    return state;
}
export default reducer;
