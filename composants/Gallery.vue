<script setup lang="ts">

const photos = [
    "/src/components/img/Galerie1.jpg",
    "/src/components/img/Galerie5.jpg",
    "/src/components/img/Galerie4.jpg",
    "/src/components/img/Galerie2.jpg",
    "/src/components/img/Galerie3.jpg",
    "/src/components/img/Galerie6.jpg",
    "/src/components/img/Galerie7.jpg",
    
]

// Utiliser Complex Grid Layout

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


  <v-container fluid >
    <v-row justify="center" align="center" >
      <v-col
 
        v-for="(photo, index) in photos"
        :key="index"
         cols="12" md="6" lg="5" 
         class="d-flex justify-center"
      
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

.v-row {
  gap: 5%;
  margin-left: 5%;
}





</style>