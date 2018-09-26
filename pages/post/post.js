// pages/post/post.js
import {DBPost} from '../../db/DBPost.js';

Page({
  data:{
    swiper: [{
      postImg: "/images/post/4.jpg"
    }, {
      postImg: "/images/post/5.jpg"
    }, {
      postImg: "/images/post/6.jpg"
    }, {
      postImg: "/images/post/7.jpg"
    }]
  },
  onLoad:function(){
    var dbPost = new DBPost();
    this.setData({
      message: dbPost.getAllPostData(),
    });
  },
  onTapToDetail(event){
    var postId = event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../post-detail/post-detail?id='+postId,
    })
  }
})