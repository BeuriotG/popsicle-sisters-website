<script setup lang="ts">

const photos = [
{
    link: "/src/components/img/Galerie7.jpg",
    cols: "4"
  },
  {
    link: "/src/components/img/Galerie5.jpg",
    cols: "6"
  },  
  {
    link: "/src/components/img/Galerie4.jpg",
    cols: "6"
  },  
  {
    link: "/src/components/img/Galerie2.jpg",
    cols: "4"
  },  
  {
    link: "/src/components/img/Galerie3.jpg",
    cols: "4"
  },  
  {
    link: "/src/components/img/Galerie6.jpg",
    cols: "3"
  },  

  {
    link: "/src/components/img/Galerie1.jpg",
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