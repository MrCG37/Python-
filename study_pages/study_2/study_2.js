// study_pages/study_2/study_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
array:[
  {
    mode: 'widthFix',
    src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_07.png'
  },
  {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_08.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_09.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_10.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_11.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_12.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_13.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_14.png'
  }, {
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_15.png'
  },{
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_16.png'
  },{
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_17.png'
  },{
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_18.png'
  },{
    mode: 'widthFix',
    src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_19.png'
  },
  {
    mode: 'widthFix',
    src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_20.png'
  }, {
    mode: 'widthFix',
    src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_21.png'
  }, {
    mode: 'widthFix',
    src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_22.png'
  }, {
    mode: 'widthFix',
    src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_23.png'
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
          url: '/study_pages/study_1/study_1',
        })
      },
      nextQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_3/study_3',
    })
  },
    ceshi: function () {
        wx.navigateTo({
          url: '/select_pages/select_1/select_1',
        })
    
      },
})