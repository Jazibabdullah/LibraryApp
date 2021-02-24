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
  setbestsellerdata,
  setspecificcatdata,
} from '../Redux/Actions/Actions';

function* getapidata() {
  try {
    const url =
      'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0';
    let resp = yield call(fetch, url);
    const data = yield resp.json();
    if (resp.status == 200) {
      yield put(setapidata(data));
    } else {
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
  } catch (error) {
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

    if (resp.status == 200) {
      const data = yield resp.json();
      yield put(setbestsellerdata(data));
    } else {
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
  } catch (error) {
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

    if (resp.status == 200) {
      const data = yield resp.json();
      yield put(setspecificcatdata(data.results.books));
    } else {
      ToastAndroid.show(
        'some thing went wrong please refresh your application',
        ToastAndroid.SHORT,
      );
    }
    // yield put(setbestsellerdata(data));
  } catch (error) {
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
