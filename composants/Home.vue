<script setup lang="ts">
import { VCardItem } from 'vuetify/lib/components/index.mjs';


const emits = defineEmits(['changeScreen'])

function goPresta() {
    emits('changeScreen', 'presta')
}
function goGallery() {
    emits('changeScreen', 'gallery')
}
function goContact() {
    emits('changeScreen', 'contact')
}


const h2 = {
    presentation: "QUI SOMMES NOUS ?",
    carousel: "Découvrir les Popsicle Sisters"
}
const paragraphPresentation = "Nous sommes les Popsicle Sisters, un trio vocal swing/jazz. Nous vous invitons dans notre univers retro, où se mêlent chants d'après-guerre et chansons modernes, des plus grands standards de jazz aux hits pop du 21ème siècle revisités à la mode du swing !"

</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                 <div class="rounded-image">
    <v-img
    src="/src/components/img/trio_accueil.jpg"
    max-height="800px">
    </v-img>
                </div>
            </v-col>
            <v-col>
                <v-container>
                    <div class="div_carousel">
                        <h2>{{ h2.presentation }}</h2>

                            <div class="presentation_text_div">
                                <p> {{ paragraphPresentation }} </p>
                            </div>


                        <h2>{{h2.carousel}}</h2>
                            <v-carousel hide-delimiters :show-arrows="false" cycle >
                            
                            <v-carousel-item   
                                            @click="goPresta"
                                            src="/src/components/img/Lien_Presta.png" 
                                            contain
                                            >
                            </v-carousel-item>

                            <v-carousel-item
                                            @click="goGallery"
                                             src="/src/components/img/Lien_Galerie.png" 
                                            contain
                                           >
                            </v-carousel-item>

                            <v-carousel-item
                                            @click="goContact"
                                            src="/src/components/img/Lien_Contact.png" 
                                            contain
                                            >
                            </v-carousel-item>
                            </v-carousel>
                    </div>

                </v-container> 
            </v-col>
        </v-row>
    </v-container>

</template>

<style scoped>

h1 {
    text-align: center;
}

h2 {
  text-align: center;
  font-family: "Cinzel Decorative", serif;
  font-weight: 500;
  color: black;
}

/* rounding of the picture */
.rounded-image {
    width: 600px;
    height: 600px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
}
/* rounding of the picture */

.presentation_text_div {
    text-align: center;
    color: black;
    padding-left: 20%;
    padding-right: 20%
}

.div_carousel {
  background-color:antiquewhite;
  color: black;
  padding-top: 0.2em;
}

.v-container {
    max-width: 2400px;
}

.v-carousel {
    cursor: pointer;
}

.v-carousel-item {
    height: auto;
    max-height: 80%
}

/* media queries for tablets */

@media(max-width: 1080px) and (orientation: portrait) {
    /* Nothing yet, looks fine */
}

@media(max-width: 1080px) and (max-height: 820px) and (orientation: landscape) {

.v-window {
    max-height: 250px;
}

.v-carousel-item{
    height: 240px;
}
}
/* media queries for tablets */

/* media queries for telephones */

@media(max-width: 430px) and (orientation: portrait){

.rounded-image {
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
}

.v-carousel-item {
    max-height: 200px;
}

.v-window {
    max-height: 250px;
}

h2 {
    font-size: medium;
}

p {
    font-size: medium;
}
}

@media(max-width: 930px) and (orientation: landscape){

.rounded-image {
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
}

.v-carousel-item {
    max-height: 200px;
}

.v-window {
    max-height: 250px;
}

h2 {
    font-size: medium;
}

p {
    font-size: small;
}
}
/* media queries for telephones */
</style>