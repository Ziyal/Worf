<template>
  <div class="career">


    <h1>Career</h1>
    <p>In 2364, Lieutenant junior grade Worf was assigned as a command division bridge officer on the USS Enterprise (NCC-1701-D), under the command of Captain Jean-Luc Picard (see Friendships: Jean-Luc Picard). Worf spent most of his first year on the Enterprise-D as a relief officer for the conn and other bridge stations.</p>

    <div class="flying-container">
        <img src="../assets/enterprise.png" id="enterprise" @click="moveEnterprise()">
    </div>


  </div>
</template>

<script>
// import Vue from 'vue'

// export default {
//     name: 'career',
//     data () {
//         return {
//         msg: 'Welcome to Your Vue.js App'
//         },
//         methods: {
//             // moveEnterprise: function() {
//             // console.log("It works!");
//             // }
//             console.log("method hit!!!!!")
//         }



//     }
// }

// function moveEnterprise() {
//     let enterprise = document.getElementById("enterprise");
//     let pos = 0;
//     let id = setInterval(frame, 5);
//     function frame() {
//         if (pos == 350) {
//             clearInterval(id);
//         } else {
//             pos++;
//             enterprise.style.left = pos + "px";
//         }
//     }
// }

// new Vue({
//     el: "#enterprise",
//     methods: {
//         moveEnterprise: function() {
//            let enterprise = document.getElementById("enterprise");
//             let pos = 0;
//             let id = setInterval(frame, 5);
//             function frame() {
//                 if (pos == 350) {
//                     clearInterval(id);
//                 } else {
//                     pos++;
//                     enterprise.style.left = pos + "px";
//                 }
//             } 
//         }
//     }
// });

</script>


<style scoped>

.flying-container {
    width: 1000px;
}

#enterprise {
    width: 200px;
}

</style>
