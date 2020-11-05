// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async(event, context) => {
  try {
    return await cloud.database().collection('post').doc(event.id).update({
      data: {
        likes_status: event.likes_status,
        total_likes:event.num
      }
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