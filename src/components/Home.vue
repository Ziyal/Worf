<template>
  <div class="home">
    <div class="title-container">
        <h1 class="title1">Worf</h1>
        <h2 class="title2">Son of Mogh</h2>
    </div>

    <section class="timeline">
        <ul>
            <li class="in-view">
                <div class="event">
                    <time>2340</time>
                    Worf, Son of Mogh, was born on the klingon homeowrld, Qo'noS (Kronos in English).
                </div>
            </li>

            <li class="in-view">
                <div class="event">
                    <time>2357</time>
                    <p>Became the first Klingon to enter Starfleet Academy and graduated in 2364.</p>
                    <img src="/static/starfleet_academy.png" class="img-academy">
                </div>
            </li>

            <li class="in-view">
                <div class="event">
                    <time>2364</time>
                    <p>As a Lieutenant Junior Grad was assinged as a command division bridge officer on the USS Enterprise (NCC-1701-D) under the command of Captain Jean-Luc Picard.</p>
                    <img src="/static/worf_command.jpg" class="img-command">
                </div>
            </li>

            <li class="in-view">
                <div class="event">
                    <time>2365</time>
                    After the death of Natasha Yar, Worf became acting security chief and not long after transfered to the operations division and officialy became the Enterprise's Chief Tactical Officer and Security Chief.
                </div>
            </li>

            <li class="in-view">
                <div class="event">
                    <time>2372</time>
                    <p>Began serving on Deep Space 9, a Federation aquired station orbiting Bajor, under command of Captain Bejamin Sisko.</p>
                    <img src="/static/worf.jpg" class="img-headshot">
                </div>
            </li>

            <li class="in-view">
                <div class="event">
                    <time>2375</time>
                    <p>Left DS9 and became the Federation ambassidor to Qo'nos.</p>
                    <img src="/static/kronos.jpg" class="img-kronos">
                </div>
            </li>

        </ul>
    </section>

  </div>
</template>

<script>
var items = document.querySelectorAll(".timeline li");

export default {
  name: 'hello',
  data () {
    return {
      isElementInViewport: function(el) {
          var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
      },
      callbackFunc: function() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
            }
        }
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    display: block;
    margin: 0 auto;
}

/* NAME TITLE */
.title-container {
    background-color: #2D436E;
    width: 250px;
    text-align: center;
    color: white;
    margin-bottom: 0px;
    padding-bottom: 3px;
    padding-top: 4px;
}
.title1 {
    text-align: center;
    margin-bottom: 0px;
    font-size: 45px;
}

.title2 {
    text-align: center;
    margin-top: 0px;
    font-size: 30px;
    font-style: italic;
}

/* TIMELINE */
.timeline {
    display: block;
    margin-top: 0px;
    margin-bottom: 50px;
    padding: 0px;
}

ul {
    padding: 0px;
}

.timeline ul li {
  list-style-type: none;
  position: relative;
  width: 6px;
  margin: 0 auto;
  padding-top: 50px;
  background: #333333;
}

.timeline ul li::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
}

.timeline ul li div {
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #2D436E;
  color: white;
}
 
.timeline ul li div::before {
  content: '';
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

.timeline ul li:nth-child(odd) div {
  left: 45px;
}
 
.timeline ul li:nth-child(odd) div::before {
  left: -15px;
  border-width: 8px 16px 8px 0;
  border-color: transparent #2D436E transparent transparent;
}

.timeline ul li:nth-child(even) div {
  left: -439px;
}
 
.timeline ul li:nth-child(even) div::before {
  right: -15px;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent #2D436E;
}

/* INSIDE EVENTS */
time {
    font-weight: bold;
    display: block;
    // text-align: center;
    font-size: 20px;
    font-style: italic;
    width: 50%;
}

p {
    width: 60%;
    display: inline-block;
}

.img-academy {
    display: inline-block;
    vertical-align: top;
    width: 35%;
    vertical-align: top;
    margin-top: -30px;
}

.img-headshot {
    display: inline-block;
    width: 35%;
    border: 3px solid white;
    border-radius: 2px;
    margin-top: -70px;
    margin-left: 10px;
}

.img-kronos {
    display: inline-block;
    border: 3px solid white;
    border-radius: 2px;
    vertical-align: top;
    width: 38%;
    vertical-align: top;
    margin-top: -25px;
    margin-left: -10px;
}

.img-command {
    display: inline-block;
    border: 3px solid white;
    border-radius: 2px;
    vertical-align: top;
    width: 38%;
    vertical-align: top;
    margin-top: -10px;
    margin-left: 2px;
}

</style>
