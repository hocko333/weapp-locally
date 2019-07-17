// pages/list/list.js
let pageNum
let cateId
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cateId = options.cateId
    pageNum = 1
    this.getList()
  },
  getList() {
    let _this = this
    // wx.request({
    //   url: `https://locally.uieee.com/categories/${cateId}/shops`,
    //   data: {
    //     _limit: 10,
    //     _page: pageNum
    //   },
    //   success(res) {
    //     if (res.data.length) {
    //       let { list } = _this.data
    //       _this.setData({
    //         list: list.concat(res.data)
    //       })
    //     } else {
    //       _this.setData({
    //         isLoading: false
    //       })
    //     }
    //   }
    // })
    const db = wx.cloud.database()
    db.collection('list')
    .skip((pageNum - 1) * 10)
    .limit(10)
    .get()
    .then(res => {
      if (res.data.length) {
        let { list } = _this.data
        _this.setData({
          list: list.concat(res.data)
        })
      } else {
        _this.setData({
          isLoading: false
        })
      }
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
    if (this.data.isLoading) {
      pageNum++
      this.getList()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})