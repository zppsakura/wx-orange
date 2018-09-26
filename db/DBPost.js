class DBPost{
  //得到全部文章信息
  getAllPostData(){
    var res = wx.getStorageSync('message')
    if(!res){
      res = require('../data/data.js').message;
    }
    return res;
  }

  constructor(postId){
    this.storageKeyName='message';
    this.postId = postId;
  }

  //保存或者更新缓存数据
  execSetStorageSync(data){
    wx.setStorageSync('message', data);
  }

  getPostItemById(){
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for(var i = 0; i < len; i++){
      if(postsData[i].postId == this.postId){
        return{
          //当前文章在缓存数据库数组中的序号
          index:i,
          data:postsData[i]
        }
      }
    }
  }
};
export { DBPost}