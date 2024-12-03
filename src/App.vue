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
      <img src="/src/components/icons/Black and White Minimalist Professional Initial Logo 3.png" alt="" class="icon_logo"></img>
      

      <v-toolbar
      rounded>
      
      <h1><span class="h1_cormorant">POPSICLE</span> SISTERS</h1>

      <div class="buttons" >
          <v-btn size="small" class="no-hover" @click="goHome">Accueil</v-btn>
          <v-btn size="small" class="no-hover" @click="goPresta">Prestation</v-btn>
          <v-btn size="small" class="no-hover" @click="goGallery">Galerie</v-btn>
          <v-btn size="small" class="no-hover" @click="goContact">Contact</v-btn>
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

.icon_logo {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
}

.buttons {
  position: absolute;
  top: 3.5%;
  right: 5%;
 
}

/* media queries for tablets */
@media(max-width: 1080px) and (orientation: portrait){
  .icon_logo {
    position: absolute;
    top: 0.6em;
    width: 180px;
  }

  .buttons {
     position: absolute;
     top: 30%;
     right: 10%;
    
  }
}

@media(max-width: 1080px) and (max-height: 820px) and (orientation: landscape){
  .icon_logo {
    position: absolute;
    top: 0.6em;
    width: 180px;
  }

  .buttons {
     position: absolute;
     top: 20%;
     right: 10%;
    
  }
}

/* media queries for tablets */


/* media queries for telephones */
@media(max-width: 430px) and (orientation: portrait){
  .icon_logo {
    position: absolute;
    top: 3em;
    left: -1em;
    width: 70px;
  }

  .buttons {
     position: absolute;
     top:30%;
  }
}

@media(max-width: 930px) and (orientation: landscape){
  .icon_logo {
    position: absolute;
    top: 3em;
    width: 90px;
  }

  .buttons {
     position: absolute;
     top:35%;
  }
}

/* media queries for telephones */
</style>

<style scoped>

h1 {
  margin-left: 6em;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 3em;
}

.h1_cormorant {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}
.no-hover {
  margin-right:3em;
  font-family: "Cormorant Garamond", serif;
  font-size: 1rem;
}
.no-hover:hover :deep(.v-btn__overlay) {
  background-color: inherit;
  opacity: 0;
}

/* media queries for tablets */
@media(max-width: 1080px) and (orientation: portrait){
  .no-hover {
    margin: auto;
    font-size: 1rem;
  }

  h1 {
  margin-left: 3.5em;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 2em;
  position: absolute;
  left: 5%;
  bottom: 5%

}

.h1_cormorant {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}
}

@media(max-width: 1080px)and (max-height: 820px) and (orientation: landscape){
  .no-hover {
    margin: auto;
    font-size: 1rem;
  }

  h1 {
  margin-left: 3.5em;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 2em;
  position: absolute;
  left: 5%;
  bottom: 5%

}

.h1_cormorant {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}
}

/* media queries for tablets */


/* media queries for telephones */
@media(max-width: 430px) and (orientation: portrait){
  .no-hover {
    margin: auto;
    font-size: 0.6rem;
  }

  h1 {
  margin-left: 15%;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 1.5em;
  position: absolute;
  bottom: 20%;
}

.h1_cormorant {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}
}

@media(max-width: 930px) and (orientation: landscape){
  .no-hover {
    margin: auto;
    font-size: 1rem;
  }

  h1 {
  margin-left: 15%;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  font-size: 2em;
  position: absolute;
  bottom: 5%;
}

.h1_cormorant {
  font-family: "Cormorant Garamond", serif;
  font-weight: 200;
  font-size: 1.1em;
}
}

/* media queries for telephones */


</style>
