<script setup lang="ts">



</script>

<template>

    <div class="img">
        <img src="/src/components/img/trio_presentation.jpg" alt="Présentation du trio" title="Présentation du trio">
    </div>
    <div class="div_carousel">
        <h2>QUI SOMMES-NOUS ?</h2>

            <div class="presentation_text_div">
                <p class="text_center">
                    Nous sommes les Popsicle Sisters, un trio vocal
                    swing/jazz. Nous vous invitons dans notre univers
                    retro, où se mêlent chants d’après-guerre et
                    chansons modernes, des plus grands standards
                    de jazz aux hits pop du 21ème siècle revisités à la
                    mode du swing ! </p>
            </div>

    
        <h2>Nos dernières activités</h2>
            <br>
            <v-carousel hide-delimiter-background :show-arrows="false" cycle>
            <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>

            <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>

            <v-carousel-item src="/src/components/img/trio_presentation.jpg"></v-carousel-item>
            </v-carousel>
    </div>
</template>

<style scoped>

h2 {
    background-color: transparent;
    color: black;
}
img {
    max-height: 600px;
    margin-top: 1em;
}

.img {
    text-align: center;
}



.div_carousel {
  background-color:antiquewhite;
  color: black;
  padding-top: 1em;
  padding-bottom: 1em;
}


</style>