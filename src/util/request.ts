import axios from "axios";

const config = {
  ApiUrl: "https://rentapi.lezf.com",
  timeout: 10000,
};

/**
 * http请求类型
 */
export enum RequestMethod {
  Get = "GET",
  Post = "POST",
}

class Request {
  method?: RequestMethod;
  url: string;
  header?: object;
  params?: object;
}

/**
 * Get请求
 */
export const Get = ({ url, params, header }: Request): any =>
  request({ method: RequestMethod.Get, header, url, params });

/**
 * post请求
 */
export const Post = ({ url, params, header }: Request) =>
  request({ method: RequestMethod.Post, header, url, params });

function request(req: Request) {
  return new Promise((resolve, reject) => {
    axios({
      url: req.url.startsWith("http") ? req.url : `${config.ApiUrl}/${req.url}`,
      timeout: config.timeout,
      headers: req.header || {},
      params: req.method == RequestMethod.Get ? req.params : null,
      data: req.method == RequestMethod.Get ? null : req.params,
    })
      .then((res) => {
        let { data, code, message } = res.data;
        if (res.status === 200 && code === 200) {
          resolve(data);
        } else {
          reject(message);
        }
      })
      .catch((err) => resolve(err));
  });
}
