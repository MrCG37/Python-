Component({
  data: {
    progress:50
      },
  methods: {
    f1:function(event){
      wx.navigateTo({
        url: '/study_pages/study_1/study_1',
      })
    },
    f1_:function(event){
      wx.navigateTo({
        url: '/study_pages/study_1_/study_1_',
      })
    },
    f2:function(event){
      wx.navigateTo({
        url: '/study_pages/study_2/study_2',
      })
    },
     f2_:function(event){
       wx.navigateTo({
         url: '/select_pages/select_1/select_1',
       })
     },
    f3:function(event){
      wx.navigateTo({
        url: '/study_pages/study_3/study_3',
      })
    },
   f3_:function(event){
     wx.navigateTo({
       url: '/select_pages/select_2/select_2',
     })
   },
    f4:function(event){
      wx.navigateTo({
        url: '/study_pages/study_4/study_4',
      })
    },
   f4_:function(event){
     wx.navigateTo({
       url: '/select_pages/select_3/select_3',
     })
   },
    f5:function(event){
      wx.navigateTo({
        url: '/study_pages/study_5/study_5',
      })
    },
    f5_:function(event){
      wx.navigateTo({
        url: '/select_pages/select_4/select_4',
      })
    },
    f6:function(event){
      wx.navigateTo({
        url: '/study_pages/study_6/study_6',
      })
    },
f6_:function(event){
  wx.navigateTo({
    url: '/select_pages/select_5/select_5',
  })
},
  }
})
