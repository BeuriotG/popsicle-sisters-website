<script setup lang="ts">



</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                 <div class="container">
    <v-img
    src="/src/components/img/trio_accueil.jpg"
    max-height="800px">
    </v-img>
                </div>
            </v-col>
            <v-col>
                <v-container>
                    <div class="div_carousel">
                        <h2>QUI SOMMES-NOUS ?</h2>

                            <div class="presentation_text_div">
                                <p>
                                    Nous sommes les Popsicle Sisters, un trio vocal
                                    swing/jazz. Nous vous invitons dans notre univers
                                    retro, où se mêlent chants d’après-guerre et
                                    chansons modernes, des plus grands standards
                                    de jazz aux hits pop du 21ème siècle revisités à la
                                    mode du swing ! </p>
                            </div>


                        <h2>Nos dernières activités</h2>
                            <v-carousel hide-delimiter-background :show-arrows="false" cycle >
                            <v-carousel-item src="/src/components/img/trio_presentation.jpg" 
                                            cover>
                            </v-carousel-item>

                            <v-carousel-item src="/src/components/img/trio_presentation.jpg" 
                                            cover>
                            </v-carousel-item>

                            <v-carousel-item src="/src/components/img/trio_presentation.jpg" 
                                            cover>
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
.container {
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
    padding-left: 25%;
    padding-right: 25%
}

.div_carousel {
  background-color:antiquewhite;
  color: black;
}

.v-container {
    max-width: 2400px;
}

/* media queries for tablets */
/* media queries for tablets */

/* media queries for telephones */

@media(max-width: 430px) and (orientation: portrait){
.container {
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
}

@media(max-width: 430px) and (orientation: landscape){
    
}
/* media queries for telephones */
</style>