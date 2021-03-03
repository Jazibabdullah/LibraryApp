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
} from './Types';
export const getapidata = () => ({
  type: GETAPIDATA,
});

export const setapidata = (data) => ({
  type: SETAPIDATA,
  data,
});
export const getapidatafailure = () => ({
  type: GETAPIDATAFAILURE,
});
export const getbestsellersdata = () => ({
  type: GETBESTSELLERSDATA,
});
export const setbestsellerdata = (data) => ({
  type: SETBESTSELLERSDATA,
  data,
});
export const getbestsellersdatafailure = () => ({
  type: GETBESTSELLERSDATAFAILURE,
});
export const getspecificcatdata = (catname) => ({
  type: GETSPECIFICCATDATA,
  catname,
});
export const setspecificcatdata = (data) => ({
  type: SETSPECIFICCATDATA,
  data,
});
export const getspecificcatdatafailure = () => ({
  type: GETSPECIFICCATDATAFAILURE,
});
