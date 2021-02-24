import {
  GETAPIDATA,
  SETAPIDATA,
  GETBESTSELLERSDATA,
  SETBESTSELLERSDATA,
  GETSPECIFICCATDATA,
  SETSPECIFICCATDATA
} from './Types';
export const getapidata = () => ({
  type: GETAPIDATA,
});
export const getbestsellersdata = () => ({
  type: GETBESTSELLERSDATA,
});
export const setbestsellerdata = (data) => ({
  type: SETBESTSELLERSDATA,
  data,
});
export const setapidata = (data) => ({
  type: SETAPIDATA,
  data,
});
export const getspecificcatdata = (catname) => ({
  type: GETSPECIFICCATDATA,
  catname,
});
export const setspecificcatdata = (data) => ({
  type: SETSPECIFICCATDATA,
  data,
});
