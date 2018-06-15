// pages/test/test.js
const util = require('../../utils/util.js');
//获取应用实例
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //登录code
    wx.login({
      success: function (res) {
        var code = res.code;
        if (code) {
          var data = {
            appid: app.globalData.wx_appid,
            appSecret: app.globalData.wx_appSecret,
            code: code
          }
          util.wxPost(app.globalData.root_url + '/api/wx_login', data, that.succ);
        } else {
          wx.login();
        }
      }
    })
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              //console(res.userInfo)
            }
          })
        }
      }
    })
   // console.log(app.globalData.wx_appid);
  },
  succ: function (res) {
    console.log(res);
    util.setStorage('openid', res.data.openid);
    util.setStorage('session_key', res.data.session_key);
  },
  error: function (res) {
    console.log(res);
  },
  comm: function (res) {
    console.log(res);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindGetUserInfo: function(e){
    wx.getUserInfo({
      withCredentials: true,
      success: function(res){
        //console.log(res);
      }
    })
  },
  getPhoneNumber: function(e){
    //console.log(e);
  }
})