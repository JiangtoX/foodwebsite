<template>
  <div id="app">
    <div class="header-nav">
      <a href=""><img src="../static/logo.png" alt=""></a>
      <ul>
        <li><router-link to="/Main">网站首页</router-link></li>
        <li><router-link to="/aboutus">关于我们</router-link></li>
        <li><router-link to="/like">菜式欣赏</router-link></li>
        <li><router-link to="/news">美食资讯</router-link></li>
        <li><router-link to="/reverse">在线预订</router-link></li>
      </ul>
    </div>
    <!-- 轮播图 -->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- 图片对应的圆点 -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- 轮流图片 -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../static/banner.jpg" alt="banner">
        </div>
        <div class="item">
          <img src="../static/banner2.jpg" alt="banner2">
        </div>
        <div class="item">
          <img src="../static/banner3.jpg" alt="banner3">
        </div>
      </div>
    </div>
    <router-view></router-view>
    <ul class="footers">
      <li><a href="">网站首页</a></li>
      <li><a href="">关于我们</a></li>
      <li><a href="">菜式欣赏</a></li>
      <li><a href="">美食资讯</a></li>
      <li><a href="">在线预订</a></li>
    </ul>
    <ul class="msg">
      <li v-for="item in msg">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </li>
    </ul>
    </div>

</template>

<script>
export default {
  name: 'App',
  data:function () {
    return {
      msg:[
        {key:"电话:",value:'0714-8868331'},
        {key:'邮箱:',value:'123@dayeyunalading.com'},
        {key:'地址:',value:'湖北省大冶市XXX大道XXX办公室'}
      ]
    }
  }

}


</script>

<style>
  @media only screen and (min-width: 320px) and (max-width: 374px) {
    html{
      font-size:42.6667px;
    }
  }
  @media only screen and (min-width: 375px) and (max-width: 413px) {
    html{
      font-size:50px;
    }
  }
  @media only screen and (min-width: 414px) and (max-width: 767px) {
    html{
      font-size:55.2px;
    }
  }
  @media only screen and (min-width: 768px) {
    html{
      font-size:100px;
    }
  }

  i,em{
    font-style: normal;
  }
  *{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  a.active{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
.header-nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 11rem;
  margin: 0 auto;
  color: #000;
  position: absolute;
  z-index: 1;
  left:0;
  right: 0;
  top: 0;
}
  .header-nav ul{
    display: flex;
    margin-bottom: 0;
  }
  .header-nav ul li{
    padding: 0.24rem 0.12rem ;
    margin-left: 0.15rem;
  }
  .header-nav ul li a{
    color: #ffffff;
    height: 0.57rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 0.18rem;
    display: inline-block;
    padding: 0.2rem 0 0.12rem;
  }
  .header-nav ul li a.active{
    color: #e25111;
    border-bottom: 0.05rem solid #e25111;
  }
  .header-nav ul li a:hover{
    color: #e25111;
    border-bottom: 0.05rem solid #e25111;
  }

  .footers{
    display: flex;
    justify-content: center;
    padding: 0.07rem 0;
    background: #2a1e13;
    border-bottom: 0.01rem solid #FFFFFF;
    margin-bottom: 0;
  }
  .footers li{
    padding: 0.2rem 0.05rem 0.1rem;
  }
  .footers li a{
    font-size: 0.12rem;
    color: #fff;
  }
  .msg{
    padding: 0.07rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background: #2a1e13;
    color: #979491;
  }
</style>
