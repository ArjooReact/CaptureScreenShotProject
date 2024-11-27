import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export async function getHeaders() {
  let userData = await AsyncStorage.getItem('userData');
  if (userData) {
    userData = JSON.parse(userData);
    return {
      authorization: ``,
    //  Content-Type: 'application/json',
      Accept: 'application/json',
    };
  }
  return {
    'authorization': '',
      'Content-Type': 'application/json',
  };
}
type MethodsType = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
export async function apiReq(
  endPoint:string,
  data:Object,
  method:MethodsType,
  headers:any,
  requestOptions = {},
) {
  return new Promise(async (res, rej) => {
    const getTokenHeader = await getHeaders();
    headers = {
      ...getTokenHeader,
      ...headers,
    };

    if (method === 'get' || method === 'delete') {
      data = {
        ...requestOptions,
        ...data,
        headers,
      };
    }
    console.log('HEADER',headers)
   console.log('REQUEST_OPTION:::::',requestOptions)
   console.log('DATA:::::::',data)
   console.log('ENDPOINT:::::::',endPoint)

    axios[method](endPoint, data, {headers})
      .then((result:any) => {
        const {data} = result;
        console.log('POST_DATAAA:::::',result.status)
        if (data.status === false) {
          return rej(data);
        }

        return res(data);
      })
      .catch((error:any) => {
        console.log(error);
        console.log(error && error.response, 'the error respne');
        if (error && error.response && error.response.status === 401) {
         
        }
        if (error && error.response && error.response.data) {
          if (!error.response.data.message) {
            return rej({
              ...error.response.data,
              msg: error.response.data.message || 'Network Error',
            });
          }
          return rej(error.response.data);
        } else {
          return rej({message: 'Network Error', msg: 'Network Error'});
        }
        return rej(error);
      });
  });
}

export function apiPost(endPoint:string, data:any, headers = {}) {
  return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint:string, data:any, headers = {}) {
  return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint:string, data:any, headers = {}, requestOptions:any) {
  return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint:string, data:any, headers = {}) {
  return apiReq(endPoint, data, 'put', headers);
}