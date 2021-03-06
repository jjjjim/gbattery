// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const { roomId, gId } = event
  try {
    return await db.collection('rooms').where({
      roomId
    }).update({
      data: {
        gId: gId || 0
      }
    })
  } catch (error) {
    if (error) {
      return error
    }
  }
}