<template>
    <div>
      <img src="./mdbanner.jpg" class="img-responsive" alt="">
      <div class="main-body container-fluid">
        <div class="row">
          <p class="col-md-5 col-sm-4 col-xs-12 ">
            <span>每一种食物来源都经过我们的精挑细选，关于食材我们只选最天然、健康、优质的，只为一份对极致美味的追求，用心做好每一份菜，是我们不变的宗旨。</span>
          </p>
          <ul class="col-md-7 col-sm-7 col-xs-12 row" style="padding:0;">
            <li v-for="(item,index) in mdlist" class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style="padding:0;">
              <img :src="item" :alt="'mdlist'+index">
            </li>
          </ul>
        </div>
      </div>
      <ul class="cat">
        <li><a href="">午餐</a></li>
        <li><a href="">晚餐</a></li>
        <li><a href="">甜品</a></li>
        <li><a href="">饮料</a></li>
      </ul>
      <ul class="menu">
        <li class="col-md-4 col-xs-6" v-for="(item,index) in menu">
          <img :src="item.Img" :alt="'foodlist'+(index+1)">
          <div class="mask1"></div>
          <div class="mask2">
            <p>
              <span>{{item.description}}</span>
              <span>{{item.engDes}}</span>
            </p>
            <h1>￥{{item.price}}</h1>
          </div>
        </li>
      </ul>
      <a href="" class="more">MORE</a>
      <p class="provide1">
        <span>在线预订</span>
      </p>
      <div class="reverse">
        <form action="">
          <ul>
            <li v-for="(item,index) in reverse">
              <label :for="'name'+index">{{item.name}}</label>
              <input type="text" :id="'name'+index">
            </li>
          </ul>
          <a href="">预订</a>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "like",
    data:function f() {
      return {
        reverse:[
          {name:"姓名"},
          {name:"电话号码"},
          {name:"电子邮件"},
          {name:"时间"},
          {name:"人数"},
          {name:"日期"},
          {name:"留言"}
        ],
        mdlist: [
          require('./mdlist1.jpg'),
          require('./mdlist2.jpg'),
          require('./mdlist3.jpg'),
          require('./mdlist4.jpg'),
          require('./mdlist5.jpg'),
          require('./mdlist6.jpg'),
          require('./mdlist7.jpg'),
          require('./mdlist8.jpg'),
          require('./mdlist9.jpg')
        ],
        menu: [
          {
            Img: require('./foodlist1.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          },
          {
            Img: require('./foodlist2.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          },
          {
            Img: require('./foodlist3.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          },
          {
            Img: require('./foodlist4.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          },
          {
            Img: require('./foodlist5.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          },
          {
            Img: require('./foodlist6.jpg'),
            description: '玫瑰香酥西蓝花',
            engDes: 'Rose Fried Broccoli',
            price: 25
          }
        ],
      }
    }
    }
</script>

<style scoped>
  .main-body{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-left: 0;
  }
  .main-body .row p{
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    height: 1.87rem;
    text-align: center;
    background: #e0dedc;
  }

  .main-body .row{
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .main-body .row ul{
    display: flex;
    flex-wrap: wrap;
  }
  .main-body .row ul li img{
    width: 100%;
    height: 100%;
  }


  .cat{
    display: flex;
    width: 100%;
    justify-content: center;
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
  .menu{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto 0.4rem;
    max-width: 11rem;
  }
  .menu li{
    position: relative;
    margin-bottom: 0.2rem;
    width: 30%;
    display: inline-block;
    padding: 0;
  }
  .menu li .mask1{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:#913617;
    opacity: 0.6;
  }
  .menu li .mask2{
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    align-items: center;
  }
  .mask2 p{
    margin: 0;
    font-size: 0.16rem;
  }
  .mask2 p span{
    display: block;

  }
  .mask2 h1{
    color: #2ba5d8;
    font-weight:bold;
    font-size: 0.3rem;
  }
  .menu li img{
    width: 100%;
    height: 100%;
  }
  .more{
    display: block;
    width: 1.38rem;
    height:0.38rem;
    padding: 0.08rem 0;
    margin: 0 auto;
    color: #e25111;
    border: 0.01rem solid #e25111;
    text-align: center;
    border-radius: 0.19rem;
    font-size: 0.14rem;
  }
  .more:hover{
    opacity: 0.7;
  }
  .more:hover{
    text-decoration: none;
    color: #e25111;
  }

  .reverse{
    margin-top: 0.2rem;
    padding:0.5rem 0.16rem;
    background: url("./reserve.jpg");
    background-size: cover;
  }
  .reverse form{
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box;
  }
  .reverse form a{
    display:inline-block;
    padding: 0.08rem 0.3rem;
    font-size: 0.14rem;
    color: #fff;
    background: #e25111;
  }
  .reverse form a:hover{
    opacity: 0.7;
  }
  .reverse form a:hover{
    text-decoration: none;
  }
  .reverse form ul{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .reverse form ul li{
    display: inline-block;
    width: 32%;
    margin-bottom: 0.2rem;
    text-align: left;
  }
  .reverse form ul li label{
    display: block;
    color: #fff;
    font-size: 0.14rem;
  }
  .reverse form ul li input{
    width: 100%;
    height: 0.4rem;
    font-size: inherit;
    background: rgba(255,255,255,0.5);
    outline: none;
    border: 0;
  }
  .reverse form ul li:last-child{
    width: 100%;
    height: 1.3rem;
  }
  .reverse form ul li:last-child input{
    height: 1.1rem;
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
</style>
