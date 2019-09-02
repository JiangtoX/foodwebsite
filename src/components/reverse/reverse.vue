<template>
    <div>
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
      name: "reverse",
      data:function () {
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
        }
      }
    }
</script>

<style scoped>
    /*预订信息*/
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

  /*在线预订*/
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
