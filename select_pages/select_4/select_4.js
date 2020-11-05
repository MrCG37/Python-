var postData = require("../../data/post-data.js");
// let shoucang=false;
Page({
  data: {
    shang:"<上一题",
    xia:"下一题>",
    // text:"这是一个页面"
    // tihao:10,
    cang_url:"../../image/star.png",
    postList: postData.postList,
    index:10,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    ny:'显示答案',
    defen:0
  },
  fcang(){
    var that = this;  
    this.setData({
      cang_url:postData.postList[that.data.index].shoucang?"../../image/star.png":"../../image/star_yellow.png"
    })
    postData.postList[that.data.index].shoucang=!postData.postList[that.data.index].shoucang
    // 我的思路想通过上面这句改变post-data.js里对应题目是否被收藏的状态，但是好像没成功，可能是跨页面传参出现了问题，这里暂时没研究出来，所以点一个题的收藏所有题都会变
  },
  nextQuestion: function () {
    var that = this;  
    if (that.data.index < 14) {
      this.setData({
        // tihao:that.data.tihao+1,
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny:'显示答案'
      });
    }
    // else if(that.data.index==2)
  //  { that.gotonext;}
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 10) {
      this.setData({
        index: that.data.index - 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny:'显示答案'
      });
    }
  },
  btnOpClick: function(e){
    var that = this;
    var select = e.currentTarget.id;
    var jieg = postData.postList[that.data.index].daan;
    if (select==jieg){
      if (that.data.index < 14){
        // postData.postList.length - 1
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
 
        this.setData({
          defen: that.data.defen+2
        })
      }
      else{
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
       that.gotonext();    
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
      else if (select == 'C') {
        this.setData({ bcC: that.data.bc_wrong });
      }
      else if (select == 'D') {
        this.setData({ bcD: that.data.bc_wrong });
      }
      else if (select == 'E') {
        this.setData({ bcE: that.data.bc_wrong });
      }
    }
  },
  gotonext: function(){
    wx.navigateTo({
      url: '/pages/tiaozhuan/tiaozhuan',
    })
  },
  xianshi: function(){
    var that=this;
    this.setData({
      ny: '答案是：'+that.data.postList[that.data.index].daan
    })
  }
})