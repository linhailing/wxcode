// pages/lottery/lottery.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "领取彩票"
    })
    //获取信息
    wx.getSystemInfo({
      success: function(res){
        console.log(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var url = "http://192.168.6.78/mobile/getUserTask?token=DZOtb9PLyWjQMzpClHcW65s3OPnsOqvYvE-eNRS.DLH-eAt15x4X9zcMsdaSAAOTZPSTDoXU-KmU7.hFkSlIGg!!&ttype=0";
    util.wxGet(url, this.succCallback);
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
  succCallback: function (json) {
    console.log('init...');
    console.log(json.data);
    console.log('init...');
  }
})