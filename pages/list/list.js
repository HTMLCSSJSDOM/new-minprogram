// pages/list/list.js
Page({
  data:{
    detailList: {}
  },
 
 onLoad(query){
   let id= query.id 
   this.getDetailList(id)
 },
 getDetailList(id){
   wx.request({
     url: 'https://test-miniprogram.com/api/news/detail',
     data: {
       id
     },
     success: res => {
       let result = res.data.result
       this.setData({
         detailList: result
       })
     }
   })
 }
})