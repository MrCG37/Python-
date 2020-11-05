// study_pages/study_4/study_4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
     {
        mode: 'widthFix',
        src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_35.png'
      },
       {
        mode: 'widthFix',
         src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_36.png'
      }, {
        mode: 'widthFix',
         src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_37.png'
      }, {
        mode: 'widthFix',
         src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_38.png'
      }, {
        mode: 'widthFix',
         src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_39.png'
      }, {
        mode: 'widthFix',
         src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_40.png'
      }, 
       
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  lastQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_3/study_3',
        })
      },
      nextQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_5/study_5',
    })
  },
    ceshi: function () {
        wx.navigateTo({
          url: '/select_pages/select_3/select_3',
        })
    
      },
})