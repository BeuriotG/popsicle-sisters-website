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
            }
        },
        VNavigationDrawer: {
            style: {
                'background': 'inherit',
            }
        },
        VBtn: {
            style: {
                'background-image': 'linear-gradient(to right, #D31027 0%, #EA384D 51%, #D31027 100%)',
                'margin': '10px',
                'padding': '15px 45px',
                'text-align': 'center',
                'text-transform': 'uppercase',
                'transition': '0.5s',
                'background-size': '200% auto',
                'color': 'white',
                'box-shadow': '0 0 20px #eee',
                'border-radius': '10px',
                'display': 'block',
            },


        },
    },
})



createApp(App).use(vuetify).mount('#app')



// createApp(App).mount('#app')
