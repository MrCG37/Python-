// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await cloud.database().collection('post').orderBy('timestamp', 'desc')
    // .skip(event.length)
    // .limit(5)
    .get({
      success: function (res) {
       return res
      },
    })
  } catch (e) {
    console.error(e)
  }

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}