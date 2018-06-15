const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const wxGet = function(url,succCallback,errCallback,comCallback){
  wx.request({
    url: url,
    method: 'GET',
    dataType: 'json',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function(json){
      if(succCallback){
        succCallback(json);
      }
    },
    fail: function(json){
      if (errCallback) {
        errCallback(json);
      }
    },
    complete: function(data){
      //成功失败都要调用该方法
      if (comCallback) {
        comCallback(json);
      }
    }
  })
}
const wxPost = function(url,data=[],succ,err,comm){
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    dataType: 'json',
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (json) {
      if (succCallback) {
        succCallback(json);
      }
    },
    fail: function (json) {
      if (errCallback) {
        errCallback(json);
      }
    },
    complete: function (data) {
      //成功失败都要调用该方法
      if (comCallback) {
        comCallback(json);
      }
    }
  })
}
const wxPostForm = function (url, data = [], succ, err, comm) {
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    dataType: 'json',
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success: function (json) {
      if (succCallback) {
        succCallback(json);
      }
    },
    fail: function (json) {
      if (errCallback) {
        errCallback(json);
      }
    },
    complete: function (data) {
      //成功失败都要调用该方法
      if (comCallback) {
        comCallback(json);
      }
    }
  })
}

module.exports = {
  formatTime: formatTime,
  wxGet: wxGet,
  wxPost: wxPost,
  wxPostForm: wxPostForm
}
