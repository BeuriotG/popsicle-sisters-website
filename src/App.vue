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
      <v-navigation-drawer location="right" floating>
        <v-list-item><v-btn @click="goHome">Accueil</v-btn></v-list-item>
        <v-list-item><v-btn @click="goGallery">Galerie</v-btn></v-list-item>
        <v-list-item><v-btn @click="goContact">Contact</v-btn></v-list-item>
      </v-navigation-drawer>


      <Home v-if="onScreenHome"></Home>
      <Gallery v-if="onScreenGallery"></Gallery>
      <Contact v-if="onScreenContact"></Contact>
      <h2>Nos dernières activités</h2>
      <br>
      <v-carousel hide-delimiter-background :show-arrows="false" cycle>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-carousel-item>
      </v-carousel>



    </v-main>
  </v-app>
</template>

<style>
html {
  background: linear-gradient(25deg, #370617 20%, #9D0208);
}
</style>
