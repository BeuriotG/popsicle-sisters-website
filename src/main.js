// import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
// import 'vuetify/styles' // Import des styles de Vuetify

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
    defaults: {
        VApp: {
            style: {
                'background': 'linear-gradient(25deg, #370617 20%, #9D0208)',
                'background-attachment': 'fixed',
                'color': 'rgb(189, 177, 177)',
                'font-family': '"Quattrocento", serif',
            },
            VContainer: {
                style: {
                    'background': 'inherit',
                },
                VSheet: {

                    style: {
                        'background': 'inherit',
                        'color': 'inherit',
                        'text-align': 'center',
                    }
                },
            }

        },

        VBtn: {

            variant: 'elevated',
            rounded: true,
            style: {
                'margin-bottom': '20px',

            },

        },

    }
})



createApp(App).use(vuetify).mount('#app')



// createApp(App).mount('#app')
