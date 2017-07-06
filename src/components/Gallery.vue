<template>
  <div class="career">
    <h1>Gallery</h1>

    <div class="gallery">
      <vue-images :imgs="images"
                  :modalclose="modalclose"
                  :keyinput="keyinput"
                  :mousescroll="mousescroll"
                  :showclosebutton="showclosebutton"
                  :showcaption="showcaption"
                  :imagecountseparator="imagecountseparator"
                  :showimagecount="showimagecount"
                  :showthumbnails="showthumbnails">
      </vue-images>
    </div>


  </div>
</template>

<script src="../node-modules/vue-images/dist/vue-images.js"></script>
<script>
import vueImages from 'vue-images'

export default {
    name: 'gallery',
    data () {
      return {
        images: [
          { imageUrl: "/static/gallery/worf.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/birthday.jpg", caption: "Worf's birtday" },
          { imageUrl: "/static/gallery/worf_jadzia.jpg", caption: "Worf & Jadzia" },
          { imageUrl: "/static/gallery/phaser.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/crew.jpg", caption: "The crew of the Enterprise" },
          { imageUrl: "/static/gallery/poker.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/party.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/klingons.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/batleth.jpg", caption: "Klingon Batleth" },
          { imageUrl: "/static/gallery/klingon.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/Klingon_death_ritual.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/worf_geordi.jpg", caption: "Worf & Geordi" },
          { imageUrl: "/static/gallery/crusher.jpg", caption: "Worf" },
        ],
        modalclose: true,
        keyinput: true,
        mousescroll: true,
        showclosebutton: true,
        showcaption: true,
        imagecountseparator: 'of',
        showimagecount: true,
        showthumbnails: false
      }
    },
    components: {
      vueImages: vueImages
    }
    
}

// export default {
//     name: 'gallery',
//     data () {
//       return {
//         images: [
//           { link: "/static/gallery/worf.jpg" },
//           { link: "/static/gallery/worf_jadzia.jpg" },
//           { link: "/static/gallery/phaser.jpg" },
//           { link: "/static/gallery/crew.jpg" },
//           { link: "/static/gallery/poker.jpg" },
//           { link: "/static/gallery/party.jpg" },
//           { link: "/static/gallery/klingons.jpg" },
//           { link: "/static/gallery/batleth.jpg" },
//           { link: "/static/gallery/klingon.jpg" },
//           { link: "/static/gallery/Klingon_death_ritual.jpg" },
//           { link: "/static/gallery/worf_geordi.jpg" },
//           { link: "/static/gallery/crusher.jpg" },
//         ]

//       }
//     }
// }

</script>



<style scoped>

.gallery {
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}



.gallery .wrapper img {
  width: 300px;
  height: auto;
}

</style>
