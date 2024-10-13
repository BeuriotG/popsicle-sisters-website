<script setup lang="ts">
import { ref } from 'vue';

import Home from '../composants/Home.vue';
import Contact from '../composants/Contact.vue';
import Gallery from '../composants/Gallery.vue';
import Presta from '../composants/Presta.vue';



const props = defineProps({
  onScreenHome:
  {
    type: Boolean,
    default: true,
  },
  onScreenPresta:
  {
    type: Boolean,
    default: false,
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
const onScreenPresta = ref(props.onScreenPresta)
const onScreenGallery = ref(props.onScreenGallery)
const onScreenContact = ref(props.onScreenContact)


function goHome() {
  onScreenHome.value = true
  onScreenContact.value = false
  onScreenPresta.value = false
  onScreenGallery.value = false
}

function goPresta() {
  onScreenHome.value = false
  onScreenContact.value = false
  onScreenPresta.value = true
  onScreenGallery.value = false
}

function goGallery() {
  onScreenHome.value = false
  onScreenContact.value = false
  onScreenPresta.value = false
  onScreenGallery.value = true
}

function goContact() {
  onScreenHome.value = false
  onScreenContact.value = true
  onScreenPresta.value = false
  onScreenGallery.value = false
}




</script>


<template>
  <v-app>
    <v-main>
      <img src="/src/components/icons/Black and White Minimalist Professional Initial Logo 3.png" alt="" class="icon_logo">

      <v-toolbar
      rounded>
      
      <h1 class="h1_banner"><span class="h1_banner_extra">POPSICLE</span> SISTERS</h1>

        <div style="position: absolute; top: 0; right: 20em">
          <v-btn class="no-hover" @click="goHome">Accueil</v-btn>
          <v-btn class="no-hover" @click="goPresta">Prestation</v-btn>
          <v-btn class="no-hover" @click="goGallery">Galerie</v-btn>
          <v-btn class="no-hover" @click="goContact">Contact</v-btn>
        </div>

      </v-toolbar>


      <Home v-if="onScreenHome"></Home>
      <Gallery v-if="onScreenGallery"></Gallery>
      <Presta v-if="onScreenPresta"></Presta>
      <Contact v-if="onScreenContact"></Contact>
      
    </v-main>
  </v-app>
</template>

<style>

html {
  background: #5c0101;

}

h1 {
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
}

h2 {
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.8); */
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
}

h3 {
  text-align: center;
  /* background-color: rgba(0, 0, 0, 0.8); */
}

.h1_banner {
  margin-left: 6em;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 3em;
}

.h1_banner_extra {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}

.icon_logo {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
}

.presentation_text_div {
    text-align: center;
    color: black;
    /* background-color: rgba(0, 0, 0, 0.8); */
}

.text_center {
    margin: auto;
    max-width: 21em;
}

</style>

<style scoped>
.no-hover {
  margin-right:3em;
  font-family: "Cormorant Garamond", serif;
}
.no-hover:hover :deep(.v-btn__overlay) {
  background-color: inherit;
  opacity: 0;
}


</style>
