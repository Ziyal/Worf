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
    template: '<div>Gallery</div>',
    props: [ 'myprop' ],
    name: 'gallery',
    data () {
      return {
        images: [
          { imageUrl: "/static/gallery/worf.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/birthday.jpg", caption: "Worf's birtday" },
          { imageUrl: "/static/gallery/worf_jadzia.jpg", caption: "Worf & Jadzia" },
          { imageUrl: "/static/gallery/phaser.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/crew.jpg", caption: "The crew of the Enterprise" },
          // { imageUrl: "/static/gallery/poker.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/worf1.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/party.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/klingons.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/batleth.jpg", caption: "Klingon Batleth" },
          { imageUrl: "/static/gallery/klingon.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/Klingon_death_ritual.jpg", caption: "Worf" },
          { imageUrl: "/static/gallery/worf_geordi.jpg", caption: "Worf & Geordi" },
          { imageUrl: "/static/gallery/crusher.jpg", caption: "Worf" },
        ],
        // set features for lightbox
        modalclose: true,
        keyinput: true,
        mousescroll: false,
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

</script>

<style scoped>

.gallery {
  display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
}

.gallery .wrapper img {
  width: 200px;
}

.wrapper {
  margin: 5px;
  width: 200px;
}

</style>
