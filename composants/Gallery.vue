<script setup lang="ts">

const photos = [
{
    link: "/img/Galerie7.webp",
    cols: "4"
  },
  {
    link: "/img/Galerie5.webp",
    cols: "6"
  },  
  {
    link: "/img/Galerie4.webp",
    cols: "6"
  },  
  {
    link: "/img/Galerie2.webp",
    cols: "4"
  },  
  {
    link: "/img/Galerie3.webp",
    cols: "4"
  },  
  {
    link: "/img/Galerie6.webp",
    cols: "3"
  },  

  {
    link: "/img/Galerie1.webp",
    cols: "4"
  }
]

</script>

<template>

  <v-container>
    <v-row>
      <v-col>
        <h1>Galerie</h1>
      </v-col>
    </v-row>
  </v-container>
    


    <!-- <div class="video">
        <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/ANjc2Jm2OAs?si=gC4sGkMNmzGvSSHN"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div> -->

<v-container>
  <v-row>
    <v-col
    v-for="(photo, index) in photos"
    :key="index"
    :cols="photo.cols"
    >
      <v-img
      :src="photo.link"
      >
      </v-img>
    </v-col>
  </v-row>
</v-container>

</template>



<style scoped>

h1 {
    text-align: center;
}

.video {
    margin-top: 2em;
    aspect-ratio: 16/9;
}
.v-container {
  max-width: 100%;
}
.v-col {
  padding: 1%;
}
</style>