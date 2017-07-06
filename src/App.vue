<template>
  <div id="app">
    
    <div class="container">
      <img src="./assets/klingon_logo.png" class="logo">

      <div class="klingon-text">
        <img src="./assets/worf.png" class="worf-klingon">
        <img src="./assets/son.png" class="son-klingon">
      </div>

      <!--<h1>Worf</h1>
      <h2>Son of Mogh</h2>-->

      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/culture">Culture</router-link></li>
        <li><router-link to="/family">Family</router-link></li>
        <li><router-link to="/career">Career</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
      </ul>

      
      <hr>

      <router-view></router-view>

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
  // text-align: center;
  color: #2c3e50;
  background-color: black;
}

.container {
  width: 1000px;
  background-color: #d1d1d1;
  height: 100%;
}

a {
  color: #890200;
}

a:hover {
  color: #DA2913;
  text-decoration: none;
}

ul {
  width: 1000px;
  text-align: right;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0px 20px 0px 20px;
}

.logo {
  display: inline-block;
  width: 300px;
}

.klingon-text {
  display: inline-block;
  width: 350px;
}

.worf-klingon {
  width: 350px;
}

.son-klingon {
  width: 300px;
  margin-left: 15px;
}
</style>
