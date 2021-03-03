import {
  GETAPIDATA,
  SETAPIDATA,
  GETAPIDATAFAILURE,
  GETBESTSELLERSDATA,
  SETBESTSELLERSDATA,
  GETBESTSELLERSDATAFAILURE,
  GETSPECIFICCATDATA,
  SETSPECIFICCATDATA,
  GETSPECIFICCATDATAFAILURE,
} from '../Actions/Types';
const initial_state = {
  ERROR: null,
  FETCHING: false,
  DATA: {},
  BESTSELLERSDATA: {},
  SPECIFICCATDATA: {},
};
export const mainReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GETAPIDATA:
      return {...state, FETCHING: true, ERROR: null};
    case SETAPIDATA:
      return {...state, DATA: action.data, FETCHING: false, ERROR: null};
    case GETAPIDATAFAILURE:
      return {...state, FETCHING: true,ERROR: true};
    case GETBESTSELLERSDATA:
      return {...state, FETCHING: true, ERROR: null};
    case SETBESTSELLERSDATA:
      return {
        ...state,
        BESTSELLERSDATA: action.data,
        FETCHING: false,
        ERROR: null,
      };
    case GETBESTSELLERSDATAFAILURE:
      return {...state, ERROR: true,FETCHING: false,};
    case GETSPECIFICCATDATA:
      return {...state, FETCHING: true, ERROR: null};
    case SETSPECIFICCATDATA:
      return {
        ...state,
        SPECIFICCATDATA: action.data,
        FETCHING: false,
        ERROR: null,
      };
    case GETSPECIFICCATDATAFAILURE:
      return {...state, ERROR: true, FETCHING: false};
    default:
      return state;
  }
};
