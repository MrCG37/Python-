let shoucang = false
let likes_status = false
let total_likes = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //this list contains data gotten from database
    showData: {},
    zan_url: '../../image/zan.png',
    cang_url: '../../image/star.png',

    //the list was used in the past and first testing version
    list: [{
        face_url: "/image/cuotiben_red.png",
        username: "Test1",
        timestamp: "2020-02-02",
        message: "Test",
        total_zans: 98,
        p1: "a1",
        p2: "b2",
        p3: "c3"
      },
      {
        face_url: "/image/cuotiben_red.png",
        username: "Test2",
        timestamp: "2020-02-03",
        message: "Test",
        total_zans: 98,
      },
      {
        face_url: "/image/cuotiben_red.png",
        username: "Test3",
        timestamp: "2020-02-04",
        message: "Test",
        total_zans: 97,
      },
      {
        face_url: "/image/cuotiben_red.png",
        username: "Test4",
        timestamp: "2020-02-05",
        message: "Test",
        total_zans: 96,
      }
    ]
  },

  /**
   * 点赞功能
   */
  fzan: function (e) {
    const db = wx.cloud.database()
    db.collection('post').doc(e.currentTarget.id).get({
      //Get likes_status from database
      success: function (res) {
        likes_status = res.data.likes_status
        total_likes = res.data.total_likes
      },
      complete: function (res) {
        // if (likes_status) {
        //   total_likes = total_likes - 1
        //   wx.showLoading({
        //     title: '取消点赞中',
        //   })
        // } else {
        //   total_likes = total_likes + 1
        //   wx.showLoading({
        //     title: '点赞中',
        //   })
        // }

        total_likes = total_likes + 1
          wx.showLoading({
            title: '点赞中',
          })
        //Change likes_status
        // likes_status = !likes_status
        wx.cloud.callFunction({
          name: "likes",
          data: {
            id: e.currentTarget.id,
            likes_status: likes_status,
            num: total_likes,
          },
          success: function (res) {
            if (res.result.errMsg == 'document.update:ok') {
              console.log('调用成功')
            } else {
              console.log(res.result.errMsg)
            }
          },
          complete: function (res) {
            if (getCurrentPages().length != 0) {
              //刷新当前页面的数据
              getCurrentPages()[getCurrentPages().length - 1].onLoad()
            }
            wx.hideLoading({
              complete: (res) => {},
            })
          },
          failed: function (res) {
            console.log(res.result.errMsg)
          }
        })
      }
    })

  },

  /**
   * 下拉刷新功能
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    this.onLoad()
    setTimeout(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 2000);
  },


  /**
   * 点击发送后的页面跳转
   */
  send: function () {
    wx.navigateTo({
      url: '/pages/send/send',
    })
  },

  f0: function () {
    wx.navigateTo({
      //url: '/pages/send/send',
      //comment page needed
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.cloud.callFunction({
      name: 'show',
      complete: res => {
        console.log("success");
        that.setData({
          showData: res.result.data
        })
      }
    })
    // this.getDataList()
  },

  //分页加载，尚未完成
  getDataList() {
    var that = this
    let len = that.data.showData.length
    if (len == undefined) {
      len = 0
    }
    console.log("length:" + len)
    wx.cloud.callFunction({
      name: 'show',
      data: {
        length: len
      },
      complete: res => {
        // console.log("success");
        if (Object.keys(that.data.showData).length == 0) {
          that.setData({
            showData: res.result.data
          })
        } else {
          that.setData({
            showData: that.showData.concat(res.result.data)
          })
        }
      }
    })
  },

  contentInput: function (e) {
    this.data.detail = e.detail.value
    //console.log(this.data.detail)
    //Test input content.
  },

  comment: function (e) {

  }

})