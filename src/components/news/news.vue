<template>
    <div class="contain">
      <p class="provide1">
        <span>美食资讯</span>
      </p>
      <ul class="cat">
        <li><a href="">最新新闻</a></li>
        <li><a href="">餐厅新闻</a></li>
        <li><a href="">美食新闻</a></li>
        <li><a href="">甜品站</a></li>
      </ul>
      <img src="./foodnews1.jpg" alt="" class="newsImg">
      <ul class="artical-list">
        <li v-for="(item,index) in articalList">
          <div>
            <strong>06</strong>
            <i>{{item.time}}</i>
          </div>
          <div>
            <a href="">
            <h3>{{item.title}}</h3>
            <p>{{item.content}}</p>
            </a>
          </div>
        </li>
      </ul>
      <ul class="fenye">
        <li>
          <a href="">1</a>
        </li>
        <li>
          <a href="">2</a>
        </li>
        <li>
          <a href="">3</a>
        </li>
        <li>
          <a href="">4</a>
        </li>
        <li>
          <a href="">下一页</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "news",
      data:function () {
        return {
          articalList:[
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
            {
              time:'2019-06-01',
              title:'一大波餐饮大咖正在分享经营经验，你需要的都在这里！',
              content:'大多数老餐饮人都有一种感觉，那就是近几年像原来那样按部就班地赚钱好像越来越难了，行业里的“套路”越来越深。行业竞争...'
            },
        ]
        }
      }
    }
</script>

<style scoped>
  .contain{
    max-width: 11rem;
    margin: 0 auto;
  }
  .provide1{
    max-width: 11rem;
    margin: 0 auto;
    padding: 0.81rem 0 0.1rem;
    text-align: center;
    border-bottom:  0.01rem solid #cccccc;

  }
  .provide1 span{
    font-size: 0.3rem;
    border-bottom: 0.02rem solid #e25111;
    padding-bottom: 0.13rem;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  /*新闻分类0*/
  .cat{
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0;
  }
  .cat li{
    padding: 0.5rem 0.25rem;
  }
  .cat li a{
    height: 0.35rem;
    box-sizing: border-box;
    display: inline-block;
    font-size: 0.22rem;
    color: #000000;
    padding:0 0 0.05rem;
    text-decoration: none;
  }
  .cat li a:hover{
    border-bottom: 0.02rem solid #e25111;
    color: #e25111;
  }
  /*新闻分类1*/

  .newsImg{
    width: 100%;
    margin-bottom: 0.5rem;
  }
  /*新闻列表0*/
  .artical-list{
    width: 100%;
  }
  .artical-list li{
    width: 100%;
    display: flex;
    padding: 0.18rem 0;
    justify-content: space-between;
    border-bottom: 0.01rem solid #dfdfdf;
  }
  .artical-list li div:first-child{
    padding: 0.1rem 0;
    background: #e25111;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12.5%;
  }
  .artical-list li div:first-child strong{
    font-size: 0.38rem;
    color: #fff;

  }
  .artical-list li div:first-child i{
    font-size: 0.16rem;
    color: #fff;
    margin-bottom: 0.1rem;
  }
  .artical-list li div:last-child{
    width: 82.32%;
  }
  .artical-list li div:last-child h3{
    margin-top: 0;
    color: #333333;
    font-size: 0.22rem;
  }
  .artical-list li div:last-child p{
    font-size: 0.18rem;
    color: #ababab;
  }
  .artical-list li div:last-child a:hover h3{
    color: #e25111;
  }
  /*新闻列表1*/
  /*分页0*/
  .fenye{
    display:flex;
    height: 0.79rem;
    justify-content: center;
  }
  .fenye li{
    display: flex;
    align-items: center;
  }
  .fenye li a{
    display: inline-block;
    padding: 0.06rem 0.12rem;
    margin-right: 0.1rem;
    border: 0.01rem solid #ddd;
    color: #ababab;
  }
  .fenye li a:hover{
    background: #e25111;
    color: #fff;
  }
/*  分页1*/
</style>
