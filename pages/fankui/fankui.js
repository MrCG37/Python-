// pages/send/send.js
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
    detail:""
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    input:function(e){
      this.data.detail = e.detail.value
    },

    send:function(e){
      wx:wx.showLoading({
        title: '加载中',
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })

      setTimeout (function(){
        wx.hideLoading()
      }, 2000)
    }
  }
})
