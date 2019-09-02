<template>
  <div class="container-fluid">
    <div class="aboutus">
      <p class="au">
        <span>关于我们</span>
      </p>
      <div class="main-about-body">

        <img src="./about1.jpg" alt="" class="about1">


        <img src="./about2.jpg" alt="" class="about2">

        <div>
          <p>
            公司致力于帮助传统行业实现在互联网时代的转型升级。目前经营的范围包括：电子商务平台开发技术支持、技术转让、运维技术服务、大数据、云计算等。
          </p>
          <p>
            The company is committed to help the traditional industries to achieve the transformation and
            upgrading in the Internet age. At present, the scope of business includes: e-commerce platform development,
            technical support, technology transfer, operation and maintenance, technical services, big data, cloud
            computing, etc..
          </p>
        </div>
      </div>
      <p class="au">
        <span>我们提供</span>
      </p>
      <ul class="provide">
        <li>
          <img src="./lunch.png" alt="">
          <h2>中餐</h2>
          <p class="text-left">公司目前经营的范围包括：电子商务平台开发技术支持、技术转让、运维技术服务大数据、云计算等。</p>
        </li>
        <li>
          <img src="./dinner.png" alt="">
          <h2>晚餐</h2>
          <p class="text-left">公司目前经营的范围包括：电子商务平台开发技术支持、技术转让、运维技术服务大数据、云计算等。</p>

        </li>
        <li>
          <img src="./coffee.png" alt="">
          <h2>甜品/咖啡</h2>
          <p class="text-left">公司目前经营的范围包括：电子商务平台开发技术支持、技术转让、运维技术服务大数据、云计算等。</p>

        </li>
      </ul>
      <p class="au">
        <span>团队成员</span>
      </p>
      <ul class="team">
        <li>
          <img src="./team1.jpg" alt="">
          <h2>大卫</h2>
          <h3>厨房主管1</h3>
          <p>我们始终秉着严谨认真的专业态度，为顾客提供最棒的服务。</p>
        </li>
        <li>
          <img src="./team2.jpg" alt="">
          <h2>米娜</h2>
          <h3>厨房主管2</h3>
          <p>我们始终秉着严谨认真的专业态度，为顾客提供最棒的服务。</p>
        </li>
        <li>
          <img src="./team3.jpg" alt="">
          <h2>大卫</h2>
          <h3>厨房主管3</h3>
          <p>我们始终秉着严谨认真的专业态度，为顾客提供最棒的服务。</p>
        </li>
      </ul>
      <p class="au">
        <span>联系我们</span>
      </p>
      <div class="map">
        <div id="allmap"></div>
        <div>
          <div class="mapmsg">
            <div>
            <span>
              <img src="./about1.png" alt="">
            </span>
              <p>大冶大道江浙商贸城金穗小区好太太办公室</p>
            </div>
            <div>
            <span>
              <img src="./about2.png" alt="">
            </span>
              <p>0714-8868331</p>
            </div>
            <div>
            <span>
              <img src="./about3.png" alt="">
            </span>
              <p>
                <span>
                  <i>周一至周五</i>
                  <i>
                    <em>中午11:00-12:00</em>
                    <em>下午17:00-22:00</em>
                  </i>
                </span>
                <span>
                  <i>周一至周五</i>
                  <i>
                    <em>中午11:00-12:00</em>
                    <em>下午17:00-22:00</em>
                  </i>
                </span>
              </p>
            </div>
          </div>
        </div>

      </div>
      <p class="au">
        <span>在线预订</span>
      </p>

    </div>
    <div class="reverse">
      <form action="">
        <ul>
          <li>
            <label for="name">姓名</label>
            <input type="text" id="name">
          </li>
          <li>
            <label for="call">电话号码</label>
            <input type="text" id="call">
          </li>
          <li>
            <label for="email">电子邮件</label>
            <input type="text" id="email">
          </li>
          <li>
            <label for="times">时间</label>
            <input type="text" id="times">
          </li>
          <li>
            <label for="num">人数</label>
            <input type="text" id="num">
          </li>
          <li>
            <label for="date">日期</label>
            <input type="text" id="date">
          </li>
          <li>
            <label for="liuyan">留言</label>
            <input type="text" id="liuyan">
          </li>
        </ul>
        <a href="">预订</a>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aboutus",
    mounted() {
      // 百度地图API功能
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.404, 39.915);
      map.centerAndZoom(point, 15);
      var marker = new BMap.Marker(new BMap.Point(116.404, 39.915)); // 创建点
      map.addOverlay(marker);
      map.enableScrollWheelZoom(true);
    }

  }

</script>

<style scoped>

  .aboutus {
    max-width: 11rem;
    margin: 0 auto;
    text-align: center;
  }

  .aboutus .au {
    border-bottom: 0.01rem solid #cccccc;
    padding-bottom: 0.1rem;
    margin: 0.81rem 0 0.1rem;
  }

  .aboutus .au span {
    color: #333333;
    font-size: 0.3rem;
    padding-bottom: 0.13rem;
    border-bottom: 0.02rem solid #e25111;
  }

  .main-about-body {
    margin-top: 0.3rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .main-about-body img {
    width: 49.75%;
  }

  .main-about-body div {
    width: 100%;
    padding: 0.25rem;
    background: #e1e3e5;
  }

  .main-about-body div p:first-child {
    padding-bottom: 0.2rem;
  }

  .main-about-body div:last-child p {
    margin: 0;
    text-align: left;
    font-size: 0.18rem;
    color: #b3b4b4;
  }

  .provide {
    display: flex;
    justify-content: space-between;
    padding-top: 0.71rem;
  }

  .provide li {
    text-align: center;
    width: 28.6%;
  }

  .provide li img {
    width: 0.9rem;
    height: 0.9rem;
  }

  .provide li h2 {
    font-size: 0.3rem;
  }

  .provide li p {
    font-size: 0.14rem;
  }

  .team {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .team li {
    width: 32%;
    text-align: left;
  }

  .team li img {
    width: 100%;
  }

  .team li h2 {
    color: #e25111;
    font-size: 0.3rem;
  }

  .team li h3 {
    color: #999999;
    font-size: 0.24rem;
  }

  .team li p {
    color: #333333;
    font-size: 0.14rem;
  }

  .map {
    width: 100%;
    padding: 0 0.1rem;
    display: flex;
  }

  .map div {
    flex: 1;
  }

  .map>div:last-child {
    background: #e2e2e2;
    display: flex;
    align-items: center;
  }

  #allmap {
    height: 3.8rem;
  }

  .mapmsg div span {
    display: inline-block;
    width: 1.08rem;
    height: 0.57rem;
  }
  .mapmsg div span img{
    width: 0.3rem;
    height: 0.3rem;
  }
  .mapmsg>div{
    display: flex;
    height: 0.57rem;
  }
  .mapmsg>div p{
    font-size: 0.16rem;
  }
  .mapmsg>div p:last-child{
    display: flex;
    flex-direction: column;
    
  }
  .mapmsg>div p:last-child span{
    display: flex;
    width: 3.18rem;
    height: 0.44rem;
    margin-bottom: 0.1rem;
  }
  .mapmsg>div p:last-child span em {
    display: block;
  }
  .mapmsg>div p:last-child span i:nth-child(2){
    flex: 1;
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
  .container-fluid{
    padding: 0;
  }
</style>
