// pages/post-detail/post-detail.js
import { DBPost } from '../../db/DBPost.js';

Page({
  data:{},
  onLoad:function(options){
    var postId = options.id;
    this.dbPost = new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post:this.postData
    })
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title: this.postData.title,
    })
  }
})

  

  