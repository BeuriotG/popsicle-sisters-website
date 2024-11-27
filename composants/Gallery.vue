<script setup lang="ts">

const photos = [
    "/src/components/img/trio_presentation.jpg",
    "/src/components/img/trio_presentation.jpg",
    "/src/components/img/trio_presentation.jpg",
    "/src/components/img/trio_presentation.jpg",
    "/src/components/img/trio_presentation.jpg",
    "/src/components/img/trio_presentation.jpg",
    
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
    


    <div class="video">
        <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/ANjc2Jm2OAs?si=gC4sGkMNmzGvSSHN"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>


  <v-container fluid >
    <v-row  >
      <v-col
 
        v-for="(photo, index) in photos"
        :key="index"
        cols="11"
        sm="6"
        md="4"
        lg="3"
      >
        <v-img
          :src="photo"
          class="rounded-img"
          alt="Photo"
          cover
        ></v-img>
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



</style>