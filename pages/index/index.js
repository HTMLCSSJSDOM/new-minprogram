//index.js
//获取应用实例
const app = getApp()
const CATAGORYLIST = [
  {
    title: '国内',
    mark: 'gn'
  },
  {
    title: '国际',
    mark: 'gj'
  },
  {
    title: '财经',
    mark: 'cj'
  },
  {
    title: '娱乐',
    mark: 'yl'
  },
  {
    title: '军事',
    mark: 'js'
  },
  {
    title: '体育',
    mark: 'ty'
  },
  {
    title: '其他',
    mark: 'other'
  }
]
Page({
  data: {
    categoryList: CATAGORYLIST,
    category: 'gn',
    newsList: [],
    topLineNew: {}
  },
  onLoad(){
    this.getNews()

  },
  getNews(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.category
      },
      success: (res) => {
     
        let result = res.data.result
        let first = result[0]
        let rest = result.slice(1)
        this.setNewsIcon(first)
        this.setNewsList(rest)
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#339ADD'
        })
        wx.setNavigationBarTitle({
          title: '快读资讯'
        })
      }
    })
  },
  onTapCategory(event){
    
    let category = event.target.dataset.category
    this.setData({
      category
    })
    this.getNews()
  },
  setNewsIcon(res){
    let topLineNew = res
    this.setData({
      topLineNew
    })
  },
  setNewsList(res){
    this.setData({
      newsList: res
    })
  },
  onTapNewDetail(e){
    let id = e.currentTarget.id
    wx.navigateTo({
      url: `/pages/list/list?id=${id}`
    })
  }
})
