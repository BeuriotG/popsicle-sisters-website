<script setup lang="ts">
import { ref } from 'vue';

import Home from '../composants/Home.vue';
import Contact from '../composants/Contact.vue';
import Gallery from '../composants/Gallery.vue';



const props = defineProps({
  onScreenHome:
  {
    type: Boolean,
    default: true,
  },

  onScreenGallery:
  {
    type: Boolean,
    default: false,
  },

  onScreenContact:
  {
    type: Boolean,
    default: false,
  }
})

const onScreenHome = ref(props.onScreenHome)
const onScreenGallery = ref(props.onScreenGallery)
const onScreenContact = ref(props.onScreenContact)


function goHome() {
  onScreenHome.value = true
  onScreenContact.value = false
  onScreenGallery.value = false
}

function goGallery() {
  onScreenHome.value = false
  onScreenContact.value = false
  onScreenGallery.value = true
}

function goContact() {
  onScreenHome.value = false
  onScreenContact.value = true
  onScreenGallery.value = false
}




</script>


<template>
  <v-app>
    <v-main>

      <v-toolbar
      image="src\components\bg_img\Red_Roses_Beautiful_Background.jpg"
      extended>
        <img src="/src/components/icons/PS_logo.png" alt=""  width="128px">

      <v-toolbar-title
      text="POPSICLE SISTERS"

      
      ></v-toolbar-title>
        <div style="position: absolute; top: 0; right: 20em">
          <v-btn class="no-hover" @click="goHome">Accueil</v-btn>
          <v-btn class="no-hover" @click="goGallery">Galerie</v-btn>
          <v-btn class="no-hover" @click="goContact">Contact</v-btn>
        </div>
      </v-toolbar>


      <Home v-if="onScreenHome"></Home>
      <Gallery v-if="onScreenGallery"></Gallery>
      <Contact v-if="onScreenContact"></Contact>
      <div v-if="onScreenHome">
        <h2>Nos dernières activités</h2>
        <br>
        <v-carousel hide-delimiter-background :show-arrows="false" cycle>
          <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>

          <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>

          <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>
        </v-carousel>
      </div>


    </v-main>
  </v-app>
</template>

<style>
html {
  background: linear-gradient(25deg, #370617 20%, #9D0208);
  background-image: url("src/components/bg_img/9744344ec04004f7fb5aeb1421befd95.jpg");

}

h1 {
  text-align: center;
  background-color: rgba(0, 0, 0, 0.8);
}

h3 {
  text-align: center;
}


</style>

<style scoped>
.no-hover {
  margin-right:3em;
}
.no-hover:hover :deep(.v-btn__overlay) {
  background-color: inherit;
  opacity: 0;
}
</style>
