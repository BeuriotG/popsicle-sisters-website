<script setup lang="ts">

function onSubmit(){
    
    window.open('mailto:popsisclesisterstrio@gmail.com')
    window.close
}



</script>

<template>
    


    <v-container >
        <v-row no-gutters>
            <v-col>
            <h1>Contact</h1>
        </v-col>
        </v-row> 
        <v-row>
            <v-col>
                <v-sheet >
                    <h2>Nos coordonnées</h2>
                    <p>popsisclesisterstrio@gmail.com</p>
                    <h2>Nos réseaux</h2>
                    
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                            Instagram </a>
                        <img src="/src/components/icons/vecteezy_instagram-logo-png-instagram-icon-transparent_18930415.png"
                            alt="" width="40px">
                    
                    <br>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">Youtube</a> <img
                        src="/src/components/icons/youtube.png"
                        alt="" width="25px">
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

h1 {
    text-align: center;
}


h2 {
    /* padding-top: 1em; */
    background-color: transparent;
}


</style>