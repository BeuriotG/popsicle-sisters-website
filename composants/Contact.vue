<script setup lang="ts">

function onSubmit(){
    
    window.open('mailto:popsisclesisterstrio@gmail.com')
    window.close
}

const h2 = {
    honoraires: "Nos honoraires"
}

const p = {
    mail: "popsisclesisterstrio@gmail.com",
    contact: "Contactez-nous pour établir un devis de prestation sur mesure."
}

</script>

<template>
    
    <v-container>
        <v-row>
            <v-col>
                <div class="container">
                    <v-img
                    src="/img/Contact.webp"
                    max-height="700px"
                    >
                    </v-img>
                </div>
            </v-col>
            <v-col>
                <v-container >
                    <v-row no-gutters>
                    </v-row> 
                    <v-row>
                        <v-col>
                            <v-sheet >
                                <div class="align-left">
                                    <p><img src="/icons/gmail.png"
                                    alt="" width="">
                                        {{p.mail}}
                                    </p>
                                    <p>
                                    <img src="/icons/instagram.png"
                                    alt="" width="25px">
                                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/popsicle_sisters/">
                                            Instagram </a>
                                    </p>
                                    <p>
                                    <img
                                        src="/icons/youtube.png"
                                        alt="" width="25px">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@PopsicleSisters">  Youtube</a> 
                                    </p> 
                                </div>   
                                <br>
                                <h2>{{h2.honoraires}}</h2>
                                <p>{{p.contact}}</p>
                                <v-btn
                                class="no-hover"
                                @click="onSubmit">
                                    Envoyez-nous un mail !
                                </v-btn>
                            </v-sheet>
                        </v-col>            
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>

</template>

<style>

a {
    text-decoration: none;
    color: inherit;
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

p{
    font-size: 1.5em;
}

.align-left {
    text-align: left;
}

.container {
    width: 450px;
    height: 450px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;    
}

/* media queries for tablets */
@media(max-width: 1080px) and (max-height: 820px) and (orientation: landscape){

.v-col {
    padding: 0px;
    height: min-content;
}

h1 {
    margin: 0px;
}
}

@media(max-width: 810px) and  (orientation: portrait){

.v-col {
    padding: 0px;
    height: min-content;
}

h1 {
    margin: 0px;
}


.container {
    width: 300px;
    height: 300px;   
}

}

/* media queries for tablets */

/* media queries for telephones */

@media(max-width: 430px) and (orientation: portrait) {
.container{
        width: 200px;
        height: 200px;
}
h1,
h2,
p {
        font-size: medium;
}
}

@media(max-width: 930px) and (orientation: landscape) {
.container{
        width: 200px;
        height: 200px;
    }
h1,
h2,
p {
        font-size: medium;
}
}
/* media queries for telephones */

</style>