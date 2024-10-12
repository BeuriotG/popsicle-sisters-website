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
                'background': 'inherit',
                'background-attachment': 'fixed',
                
                'color': 'rgb(189, 177, 177)',
                'font-family': '"Quattrocento", serif',
            },
            VBtn: {

                variant: 'outlined',
                rounded: true,
                style: {
                    'margin-top': '1em',
                    'background': 'linear-gradient(25deg, #370617 10%, #9D0208)',
                    'cursor': 'pointer',
                    'color': 'white',
                    'border': 'solid 1px black'
    
                },
    
            },
            VToolbar: {
                style: {
                    'background': 'rgb(131,58,180)',
                    'background': 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 10%, rgba(252,176,69,1) 100%)', 
                    'color':'inherit',
                },},
            VContainer: {
                style: {
                    'background': 'inherit',
                },
                VSheet: {

                    style: {
                        'background-color': 'rgba(0, 0, 0, 0.8)',
                        
                        color: 'inherit',
                        'text-align': 'center',
                    }
                },
                VTextarea: {
                    style: {
                        'background-color': 'white',
                    }
                }
            }

        },

      

    }
})



createApp(App).use(vuetify).mount('#app')



// createApp(App).mount('#app')
