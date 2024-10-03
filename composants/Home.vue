<script setup lang="ts">



</script>

<template>

    <NavMenu></NavMenu>
    <h1>POPSICLE SISTERS</h1>
    <br>
    <div class="img">
        <img src="/src/components/img/trio_presentation.jpg" alt="Présentation du trio" title="Présentation du trio">
    </div>
    <h2>QUI SOMMES-NOUS ?</h2>

    <div class="presentation_text_div">
        <p class="presentation_text_p">
            Nous sommes les Popsicle Sisters, un trio vocal
            swing/jazz. Nous vous invitons dans notre univers
            retro, où se mêlent chants d’après-guerre et
            chansons modernes, des plus grands standards
            de jazz aux hits pop du 21ème siècle revisités à la
            mode du swing ! </p>
    </div>

</template>

<style>
h1 {
    text-align: center;
    font-size: 5em;
}

h2 {
    text-align: center;
}


img {
    max-height: 500px;
}

.img {
    text-align: center;
}

.presentation_text_div {
    text-align: center;
}

.presentation_text_p {
    margin: auto;
    max-width: 21em;

}
</style>