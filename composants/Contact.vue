<script setup lang="ts">

function onSubmit(){
    
    window.open('mailto:popsisclesisterstrio@gmail.com')
    window.close
}



</script>

<template>
    <h1>Contact</h1>


    <v-container class="fill-height">
        <v-row no-gutters>
            <v-col>
                <v-sheet height="500px">
                    <h2>Nos coordonnées</h2>
                    <p>mail: popsisclesisterstrio@gmail.com</p>
                    <h2>Nos réseaux</h2>
                    
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                            Instagram </a>
                        <img src="/src/components/icons/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png"
                            alt="" width="40px">
                    
                    <br>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">Youtube</a> <img
                        src="/src/components/icons/youtube.png"
                        alt="" width="25px">

                </v-sheet>
            </v-col>
            <v-col>
                <v-sheet height="500px">
                    <h2>Nos prestations</h2>
                    <h3>Mariages</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nisi hic cupiditate earum
                        incidunt
                        accusamus illum quo, harum vitae rerum debitis corrupti excepturi blanditiis consequatur
                        explicabo eius
                        quibusdam voluptatum ea.</p>
                    <h3>Evenements professionnels</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, assumenda veritatis?
                        Incidunt
                        natus sapiente reiciendis dolorem eveniet sit perferendis aperiam praesentium commodi adipisci
                        fugiat
                        vitae, maxime, consequuntur, voluptate ratione nam.</p>
                    <h3>Dates de fêtes (Noël, etc...)</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, facere tempore. Blanditiis error
                        pariatur
                        officia consequatur facere ipsam beatae quae illum autem dolore hic quo, iusto et voluptates.
                        Velit,
                        doloribus.</p>
                </v-sheet>
            </v-col> <v-col>
                <v-sheet height="500px">
                    <h2>Nos honoraires</h2>
                    <p>Contactez-nous pour établir un devis de prestation sur mesure.</p>
                    <v-btn
                    class="no-hover"
                      @click="onSubmit">
                        Envoyez-nous un petit mail !
                    </v-btn>
                </v-sheet>
            
            
            </v-col>
            
        </v-row>
    </v-container>



</template>

<style>
a {
    text-decoration: none;
    color: inherit;
    font-size: 1.3em;
}


</style>

<style scoped>

.no-hover:hover :deep(.v-btn__overlay) {
  background-color: inherit;
  opacity: 0;
}

h2 {
    padding-top: 1em;
}
h3 {
    margin-top: 2em;;
}

</style>