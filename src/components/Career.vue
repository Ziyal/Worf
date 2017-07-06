<template>
  <div class="career">


    <h1>Career</h1>
    <p>In 2364, Lieutenant junior grade Worf was assigned as a command division bridge officer on the USS Enterprise (NCC-1701-D), under the command of Captain Jean-Luc Picard (see Friendships: Jean-Luc Picard). Worf spent most of his first year on the Enterprise-D as a relief officer for the conn and other bridge stations.</p>

    <p>Worf was permitted a variation from the Starfleet uniform dress code, and wore a Klingon warrior's sash, sometimes called a baldric by Humans, over his regular duty uniform. (Star Trek: The Next Generation; Star Trek: Deep Space Nine; Star Trek: Insurrection) Worf's quarters were on Deck 7, in Section 25 Baker until 2370, when he moved to Deck 2, Room 2713.</p>


    <div class="flying-container">
        <img src="../assets/enterprise.png" id="enterprise" v-on:click="moveEnterprise">
    </div>

    <p>Following the death of Natasha Yar at the hands of the Armus entity, Worf became acting security chief. In 2365, Worf transferred to the operations division and officially became the Enterprise-D's chief tactical officer and security chief. He was promoted to the rank of full lieutenant in 2366. After seven years of service aboard the starship, Worf rose in rank to lieutenant commander in 2371.</p>

    <p>During these years of service, Worf's record was marred by a single reprimand, earned when he killed Duras in an honor duel after the latter had Worf's mate, K'Ehleyr, killed. Killing Duras directly affected the ascension of a new Klingon Chancellor after the death of K'mpec.</p>

  </div>
</template>

<script>

export default {
    data () {
        message: "carreer"
    },
    methods: {
        moveEnterprise: function() {
            let enterprsie = document.getElementById("enterprise");
            let pos = 0;
            let id = setInterval(frame, 5);
            function frame() {
                if(pos == 750) {
                clearInterval(id);
                } else {
                    pos++;
                    enterprise.style.left = pos + "px";
                }     
            }
            // function frame() {
            //     if(pos == 350) {
            //         clearInterval(id);
            //     } else {
            //         pos++;
            //         enterprise.style.left = pos + "px";
            //     }
            // }
        },

    }
}

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


</script>


<style scoped>

.flying-container {
    position: relative;
    width: 1000px;
    height: 80px;
    margin-top: 35px;
}

#enterprise {
    position: absolute;
    width: 200px;
}

</style>
