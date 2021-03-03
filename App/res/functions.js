// import axios from 'axios';
// import {ToastAndroid} from 'react-native';
// export async function getcategoriesdata() {
//   let resp = await axios.get(
//     'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0',
//   );
//   if (resp.ok) {
//     const data = resp.data.results;
//   } else {
//     ToastAndroid.show(
//       'some thing went wrong please refresh your application',
//       ToastAndroid.SHORT,
//     );
//   }
//   return data;
// }
// export async function getbestsellersdata() {
//   let resp = await axios.get(
//     'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=gYGVOUdSlHqtps4tIxTAfV829PM3vCJ0',
//   );
//   const data = resp.data.results;
//   console.log('second function');
 
//   return data;
// }
