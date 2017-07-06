<template>
  <div class="career">
    <h1>Gallery</h1>

    <div class="gallery">
      <div v-for="image in images">
        <img :src="image.link" class="gallery-img">
      </div>
    </div>


  </div>
</template>

<script>

export default {
    name: 'gallery',
    data () {
      return {
        images: [
          { link: "/static/gallery/worf.jpg" },
          { link: "/static/gallery/worf_jadzia.jpg" },
          { link: "/static/gallery/worf_geordi.jpg" },
          { link: "/static/gallery/poker.jpg" },
          { link: "/static/gallery/phaser.jpg" },
          { link: "/static/gallery/party.jpg" },
          { link: "/static/gallery/klingons.jpg" },
          { link: "/static/gallery/klingon.jpg" },
          { link: "/static/gallery/Klingon_death_ritual.jpg" },
          { link: "/static/gallery/crusher.jpg" },
          { link: "/static/gallery/crew.jpg" },
          { link: "/static/gallery/batleth.jpg" }
        ]

      }
    }
}


</script>



<style scoped>

.gallery {
  display: block;
  width: 100%;

}

.gallery-img {
  width: 300px;
  display: inline-block;
}

</style>
