// pages/send/send.js
const time = require("../../utils/util.js");
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    detail: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input: function(e) {
      this.data.detail = e.detail.value
      //console.log(this.data.detail)
      //Test input content.
    },

    /**
     * 发送功能的实现
     */
    send: function(e) {
      var that = this
      const db = wx.cloud.database()
      
      //Database Insert
      if(getApp().globalData.userInfo.nickName==undefined){
        db.collection('post').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            username: "游客",
            message: this.data.detail,
            publisher_id: getApp().globalData.user_id,
            timestamp: time.formatTime(Date.parse(new Date()), 'Y/M/D h:m:s'),
            face_url: getApp().globalData.userInfo.avatarUrl,
            likes_status:false,
            total_likes: 0,
            images: [""]
          },
          success: function(res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            //发布成功
            console.log(res)
            console.log(发布成功)
          },
          complete: function(res) {
            wx.showToast({
              title: '发布成功',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '/pages/shequ/shequ'
            })
          }
        })
      }
      else{
        console.log(getApp().globalData)
        db.collection('post').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            username: getApp().globalData.userInfo.nickName,
            message: this.data.detail,
            publisher_id: getApp().globalData.user_id,
            timestamp: time.formatTime(Date.parse(new Date()), 'Y/M/D h:m:s'),
            face_url: getApp().globalData.userInfo.avatarUrl,
            likes_status:false,
            total_likes: 0,
            images: [""]
          },
          success: function(res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            //发布成功
            console.log(res)
            console.log(发布成功)
          },
          complete: function(res) {
            wx.showToast({
              title: '发布成功',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '/pages/shequ/shequ'
            })
          } 
        })
      }
      
    }
  }
})