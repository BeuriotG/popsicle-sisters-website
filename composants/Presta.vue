<script setup lang="ts">

const prestations = [
{
    titre: "Mariages",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
},
{
    titre: "Evenements professionnels",
    description:""
},
{
    titre: "Dates de fêtes (Noël, etc...)",
    description: ""
}
]

</script>

<template>

<v-container>
            <v-col>
                <v-sheet >
                    <h2>Nos prestations</h2>
                    <div v-for="(prestation, index) in prestations" :key="index" class="prestation-section">
                        <h3>{{ prestation.titre }}</h3>
                        <p class="text-center">{{ prestation.description }}</p>
                    </div>
                </v-sheet>
            </v-col>
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


</style>