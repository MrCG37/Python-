//app.js
App({
  onLaunch: function () {
    //云开发环境初始化
    wx.cloud.init({
      env: "pytestmodel-3qdd0"
    })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    

    this.globalData = {
      user_id: "",  //由后台返回的用户全部信息
      userInfo: {}, //微信获取用户信息
    }
  },
  
})