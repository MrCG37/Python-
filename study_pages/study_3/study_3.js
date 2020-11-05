// study_pages/study_3/study_3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
        mode: 'widthFix',
      src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_24.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_25.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_26.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_27.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_28.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_29.png'
      },
      {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_30.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_31.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_32.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_33.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_34.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  lastQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_2/study_2',
        })
      },
      nextQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_4/study_4',
    })
  },
    ceshi: function () {
        wx.navigateTo({
          url: '/select_pages/select_2/select_2',
        })
    
      },
})