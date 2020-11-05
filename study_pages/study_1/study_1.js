// pages/study_1/study_1.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
          array: [
            {
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_01.png'
            },
            {
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_02.png'
            },
            {
              text:'软件官网下载地址：https://www.python.org/downloads/',
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_03.png'
            },
            {
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_04.png'
            },
            {
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_05.png'
            },
            {
              mode: 'widthFix',
              src:'cloud://pytestmodel-3qdd0.7079-pytestmodel-3qdd0-1301778314/course/教程_06.png'
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
                url: '',
              })
            },
            nextQuestion: function () {
              wx.navigateTo({
                url: '/study_pages/study_2/study_2',
          })
        },
          ceshi: function () {
              wx.navigateTo({
                url: '',
              })
          
            },
      })