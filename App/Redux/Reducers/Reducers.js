import {
  GETAPIDATA,
  SETAPIDATA,
  GETBESTSELLERSDATA,
  SETBESTSELLERSDATA,
  GETSPECIFICCATDATA,
  SETSPECIFICCATDATA,
} from '../Actions/Types';
const initial_state = {
  DATA: {},
  BESTSELLERSDATA: {},
  SPECIFICCATDATA: {},
};
export const mainReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GETAPIDATA:
      return {...state};
    case SETAPIDATA:
      return {...state, DATA: action.data};
    case GETBESTSELLERSDATA:
      return {...state};
    case SETBESTSELLERSDATA:
      return {...state, BESTSELLERSDATA: action.data};
    case GETSPECIFICCATDATA:
      return {...state};
    case SETSPECIFICCATDATA:
      return {...state, SPECIFICCATDATA: action.data};
    default:
      return state;
  }
};
