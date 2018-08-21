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
    const self = this;
    return request(options)
      .then((res) => {
        // statusCode === 200 的逻辑
        let data = res.data;
        if (0 === +data.code && data.data) {
          return Promise.resolve(res.data);
        } else {
          self.showMsg(data.code);
          return Promise.reject(err);
        }
      }).catch((err) => {
        console.log("err is: ", err);
        self.showMsg(err.errMsg);
        // statusCode 非 200，或者其他错误处理
        return Promise.reject(err);
      });
  }

  showMsg(msg) {
    
    wx.showToast({
      title: '接口加载发生错误',
      icon: 'none'
    });
    // wepy.showModal({
    //   title: '提示',
    //   content: String(msg),
    //   showCancel: false
    // })
  }

}
