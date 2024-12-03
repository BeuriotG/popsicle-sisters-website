<script setup lang="ts">

const prestations = [
{
    titre: "CE QUE NOUS PROPOSONS",
    description: "Nous proposons des concerts et animations musicales (petits sets musicaux, happenings,...) pour vos événements : festivals, mariages, séminaires, et célébrations en tout genre. Nos prestations se font sur bande-son ou bien accompagnées de musiciens."
},
{
    titre: "SAISON DE NOËL",
    description:"Nous proposons également un répertoire de Noël pour célébrer les fêtes de fin d’année en chanson !"
},

]

</script>

<template>

    <!-- En haut à gauche en rond la photo Pres 1 et en bas à droite la P¨res Noël -->
<v-container>
    <v-row>
        <v-col>
            <div class="container-1">
                <v-img
                src="/src/components/img/Prestations1.jpg"
                max-height="400px">
                </v-img>
            </div>
        </v-col>
        <v-col>
            <v-container>
                <v-col>
                    <v-sheet >
                        <div class="container-2">
                            <h2>Nos prestations</h2>
                            <div v-for="(prestation, index) in prestations" :key="index" class="prestation-section">
                                <h3>{{ prestation.titre }}</h3>
                                <p class="text-center">{{ prestation.description }}</p>
                            </div>
                        </div>
                    </v-sheet>
                </v-col>
            </v-container>
        </v-col>
        <v-col>
            <div class="container-3">
                <v-img
                src="/src/components/img/Prestations Noel.jpg"
                height="400px"
                width="300px"
                cover
                >
                </v-img>
            </div>
        </v-col>
    </v-row>
</v-container>


</template>

<style scoped>

h1 {
    text-align: center;
}

.text-center{
    text-align: center;
}

.prestation-section {
    margin-bottom: 20px;
}

.v-col {
    width: 400px;
}

.container-1 {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    
}

.container-3 {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    position:absolute;
    bottom: 5%;
    right: 10%;
}

@media(max-width: 430px){
    .container-1 {
    width: 150px;
    height: 150px;
    position:absolute;
    bottom: 20%;
    left: 10%;
}

.container-2 {
        position: absolute;
        top: 15%;
}

.container-3 {
    width: 150px;
    height: 150px;
    position:absolute;
    bottom: 20%;
    right: 10%;
}}

@media(max-width: 1450px){
    .container-1 {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    
}



.container-3 {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 2em;
    margin-bottom: 2em;
    position:absolute;
    bottom: 5%;
    right: 10%;
}}







</style>