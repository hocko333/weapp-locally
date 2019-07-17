// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [],
    swiperList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // getCategories() {
  //   const db = wx.cloud.database()
  //   db.collection('categories').get({
  //     success(res) {
  //       console.log(res)
  //     }
  //   })
  // },
  onLoad(options) {
    let _this = this
    // wx.request({
    //   url: 'https://locally.uieee.com/slides',
    //   success(res) {
    //     _this.setData({
    //       swiperList: res.data
    //     })
    //   }
    // })
    // wx.request({
    //   url: 'https://locally.uieee.com/categories',
    //   success(res) {
    //     _this.setData({
    //       itemList: res.data
    //     })
    //   }
    // })
    const db = wx.cloud.database()
    db.collection('categories').get({
      success(res) {
        _this.setData({
          itemList: res.data
        })
      }
    })
    db.collection('slides').get().then(res => {
      _this.setData({
        swiperList: res.data
      })
    })
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

  }
})