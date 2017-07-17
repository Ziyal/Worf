<template>
  <div id="app">
    <div class="twinkling">
      
      <div class="container">

        <img src="./assets/klingon_logo.png" class="logo">

        <div class="right-container">
          <div class="klingon-text">
            <img src="./assets/worf.png" class="worf-klingon">
            <img src="./assets/son.png" class="son-klingon">
          </div>

          <ul class="navbar-list">
            <li class="navbar-item"><router-link to="/">Home</router-link></li>
            <li class="navbar-item dots">● ● ● ●</li>
            <li class="navbar-item"><router-link to="/culture">Culture</router-link></li>
            <li class="navbar-item dots">● ● ● ●</li>
            <li class="navbar-item"><router-link to="/family">Family</router-link></li>
            <li class="navbar-item dots">● ● ● ●</li>
            <li class="navbar-item"><router-link to="/career">Career</router-link></li>
            <li class="navbar-item dots">● ● ● ●</li>
            <li class="navbar-item"><router-link to="/gallery">Gallery</router-link></li>
          </ul>
        </div>
        
        <hr>

        <router-view></router-view>

        <div class="footer">This website is built with data collected from <a href="http://memory-alpha.wikia.com/wiki/Worf">Memory Alpha Wiki</a>
        </div>
        
      </div>

      
    </div>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #333333;
}

/* ============================================================================================== 
STAR BACKGROUND EFFECT FROM:
Nick Mkrtchyan
https://www.facebook.com/sonick.pk
http://www.Mkrtchyan.zz.mu
================================================================================================= */

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-webkit-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-moz-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}
@-ms-keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-webkit-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-moz-keyframes move-clouds-back {
    from {background-position:0 0;}
    to {background-position:10000px 0;}
}
@-ms-keyframes move-clouds-back {
    from {background-position: 0;}
    to {background-position:10000px 0;}
}

#app {
  background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
  z-index:1;
  -moz-animation:move-twink-back 500s linear infinite;
  -ms-animation:move-twink-back 500s linear infinite;
  -o-animation:move-twink-back 500s linear infinite;
  -webkit-animation:move-twink-back 500s linear infinite;
  animation:move-twink-back 500s linear infinite;
}

.clouds{
  background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
  z-index:3;
  -moz-animation:move-clouds-back 200s linear infinite;
  -ms-animation:move-clouds-back 200s linear infinite;
  -o-animation:move-clouds-back 200s linear infinite;
  -webkit-animation:move-clouds-back 200s linear infinite;
  animation:move-clouds-back 200s linear infinite;
}

.container {
  width: 1000px;
  background-color: #f2f2f2;
  padding-left: 30px;
  padding-right: 30px;
  height: 100%;
}

/* RIGHT TOPBAR */
.right-container {
  display: inline-block;
  width: 600px;
  text-align: center;
}

.klingon-text {
  display: inline-block;
  width: 500px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-top: 40px;
}

.worf-klingon {
  width: 550px;
}

.son-klingon {
  width: 500px;
  // margin-right: 10px;
  margin-left: 10px;
}

.navbar-list {
  width: 600px;
  text-align: right;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar-item {
  display: inline-block;
  margin: 0px 20px 0px 20px;
}

.dots {
  font-size: 6px;
  margin: 0px;
  margin-bottom: 15px;
  color: #890200;
}

hr {
  margin-top: 5px;
}

/* */
a {
  color: #890200;
}

a:hover {
  color: #DA2913;
  text-decoration: none;
}

.logo {
  display: inline-block;
  width: 300px;
  vertical-align: top;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

/* FOOTER */
.footer {
  width: 1000px;
  background-color: #383838;
  margin-left: -30px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: grey;
  font-size: 11px;
}
</style>
