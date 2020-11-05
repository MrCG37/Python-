Page({
  data: {
    name: "点击授权登录",
    advice: ">>欢迎提出您的宝贵建议！<<",
    touxiang: "/image/mine.png",
    my_ListInfo: [{
      icon: '/image2/plus.png',
      text: '我的发布'
    }, ],
    my_ListInfo_1: [{
      icon: '/image2/pinglun.png',
      text: '我的消息'
    }, ],
    my_ListInfo_2: [{
      icon: '/image/star.png',
      text: '我的收藏'
    }, ],
   my_ListInfo_3: [{
     icon: '/image/help.png',
     text: '意见反馈'
   }, ],
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
  fa: function () {
    wx.navigateTo({
      url: '/pages/wanshan/wanshan',
    })
  },
  fa_2: function () {
    wx.navigateTo({
      url: '/pages/wanshan/wanshan',
    })
  },
  fa_3: function () {
    wx.navigateTo({
      url: '/pages/fankui/fankui',
    })
  },
  getMyInfo: function (e) {
    console.log(e.detail.userInfo)
    if (e.detail.userInfo) {
      console.log("点击了同意授权");
      let info = e.detail.userInfo;
      this.setData({
        name: info.nickName,
        touxiang: info.avatarUrl,
      })
      wx.login({
        success(res) {
          if (res.code) {
            // 查看是否授权
            wx.getSetting({
              success(res) {
                if (res.authSetting['scope.userInfo']) {
                  // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                  wx.getUserInfo({
                    success: function (res) {
                      console.log(res.userInfo);
                      console.log(getApp().globalData)
                      getApp().globalData.userInfo = res.userInfo;
                    }
                  })
                }
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })

    } else {
      console.log("点击了拒绝授权");
    }

  },
  f1: function () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})