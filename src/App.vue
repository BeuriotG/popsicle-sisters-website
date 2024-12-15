<script setup lang="ts">
import { ref } from 'vue';

import Home from '../composants/Home.vue';
import Contact from '../composants/Contact.vue';
import Gallery from '../composants/Gallery.vue';
import Presta from '../composants/Presta.vue';

const currentScreen = ref('home')

function handleChangeScreen (screen: string){
  currentScreen.value = screen
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
          <v-btn size="small" class="no-hover" @click="handleChangeScreen('home')">Accueil</v-btn>
          <v-btn size="small" class="no-hover" @click="handleChangeScreen('presta')">Prestations</v-btn>
          <v-btn size="small" class="no-hover" @click="handleChangeScreen('gallery')">Galerie</v-btn>
          <v-btn size="small" class="no-hover" @click="handleChangeScreen('contact')">Contact</v-btn>
        </div>
      </v-toolbar>




      <Home v-if="currentScreen === 'home'" @change-screen="handleChangeScreen"></Home>
      <Gallery v-if="currentScreen === 'gallery'"></Gallery>
      <Presta v-if="currentScreen === 'presta'"></Presta>
      <Contact v-if="currentScreen === 'contact'"></Contact>
      
    </v-main>
  </v-app>

</template>

<style>

html {
  background: #5c0101;
}

h1,
h2,
h3,
button {
  font-family: "Cinzel Decorative", serif;
}

p{
  font-size: 1.2em;
}

p,
a {
  font-family: "Cormorant Garamond", serif;

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

@media(max-width: 1500px) and (orientation: landscape){

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
    top: 3.8em;
    left: -1em;
    width: 70px;
}

.buttons {
     position: absolute;
     top: 30%;
     left: 5%;
     right: 0%;
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
  font-family: "Cinzel Decorative", serif;
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

@media(max-width: 1500px) and (orientation: landscape){
  
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
