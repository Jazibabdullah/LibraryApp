import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {
  GETAPIDATA,
  GETBESTSELLERSDATA,
  GETSPECIFICCATDATA,
} from '../Redux/Actions/Types';
import {ToastAndroid} from 'react-native';
import {
  setapidata,
  getapidatafailure,
  setbestsellerdata,
  getbestsellersdatafailure,
  setspecificcatdata,
  getspecificcatdatafailure,
} from '../Redux/Actions/Actions';

function* getapidata() {
  try {
    const url =
      'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0';
    let resp = yield call(fetch, url);

    const data = yield resp.json();

    if (resp.ok) {
      yield put(setapidata(data));
    } else {
      yield put(getapidatafailure());
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
  } catch (error) {
    yield put(getapidatafailure());
    ToastAndroid.show(
      'somethimg went wrong please try to refresh your internet connection',
      ToastAndroid.SHORT,
    );
  }
}
function* getsellersdata() {
  try {
    const url =
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0';
    let resp = yield call(fetch, url);
    const data = yield resp.json();
    if (resp.ok) {
      yield put(setbestsellerdata(data));
    } else {
      yield put(getbestsellersdatafailure());
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
  } catch (error) {
    yield put(getbestsellersdatafailure());
    // alert(JSON.stringify());
    ToastAndroid.show(
      'somethimg went wrong please try to refresh your internet connection',
      ToastAndroid.SHORT,
    );
  }
}
function* getspecificcategoriesdata(action) {
  try {
    const url = `https://api.nytimes.com/svc/books/v3/lists/${action.catname}?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0`;

    let resp = yield call(fetch, url);

    if (resp.status!= null) {
      const data = yield resp.json();
      yield put(setspecificcatdata(data.results.books));
    } else {
      yield put(getspecificcatdatafailure());
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
    
  } catch (error) {
    yield put(getspecificcatdatafailure());
    // alert(JSON.stringify());
    ToastAndroid.show(
      'somethimg went wrong please try to refresh your internet connection',
      ToastAndroid.SHORT,
    );
  }
}

function* SagaActions() {
  yield takeLatest(GETAPIDATA, getapidata);
  yield takeLatest(GETBESTSELLERSDATA, getsellersdata);
  yield takeLatest(GETSPECIFICCATDATA, getspecificcategoriesdata);
}
export default SagaActions;
