// study_pages/study_5/study_5.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
     {
        mode: 'widthFix',
        src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_41.png'
      },{
        mode: 'widthFix',
        src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_42.png'
      },{
        mode: 'widthFix',
        src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_43.png'
      },
      {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_44.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_45.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_46.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_47.png'
      }, {
        mode: 'widthFix',
        src: 'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_48.png'
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
          url: '/study_pages/study_4/study_4',
        })
      },
      nextQuestion: function () {
        wx.navigateTo({
          url: '/study_pages/study_6/study_6',
    })
  },
    ceshi: function () {
        wx.navigateTo({
          url: '/select_pages/select_4/select_4',
        })
    
      },
})