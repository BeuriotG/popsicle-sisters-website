<template>
    <h1>Galerie</h1>

    <div class="grid">

        <img src="/src/components/img/trio_presentation.jpg" alt="">


        <img src="/src/components/img/trio_presentation.jpg" alt="">


        <img src="/src/components/img/trio_presentation.jpg" alt="">


        <img src="/src/components/img/trio_presentation.jpg" alt="">


        <img src="/src/components/img/trio_presentation.jpg" alt="">


        <img src="/src/components/img/trio_presentation.jpg" alt="">

    </div>
    <div class="video">
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/ANjc2Jm2OAs?si=gC4sGkMNmzGvSSHN"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

</template>

<style>
.grid {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 719px);
    margin-left: 20px;
}

.video {
    text-align: center;
    margin-top: 2em;
}
</style>