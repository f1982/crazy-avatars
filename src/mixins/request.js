import wepy from 'wepy'
import request from 'wepy-better-request';

export default class requestMixin extends wepy.mixin {
  data = {
    foo: 'This is request foo data.'
  }
  methods = {

  }

  onShow() {
    console.log('requestMixin onShow')
  }

  onLoad() {
    console.log('requestMixin onLoad')
    request.config({
      baseURL: 'https://www.f1982.com/app/time-signet',
      testURL: 'https://www.f1982.com/app/time-signet-test'
    });
  }

  http(options) {
    return request(options)
      .then((res) => {
        // statusCode === 200 的逻辑
        return Promise.resolve(res.data);
      }).catch((err) => {
        // statusCode非200，或者其他错误处理
        return Promise.reject(err);
      });
  }
}
