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
                
                'color': 'antiquewhite',
                'font-family': '"Quattrocento", serif',
            },
            VBtn: {

                variant: 'elevated',
                rounded: true,
                style: {
                    'margin-top': '1em',
                    'background': 'antiquewhite',
                    'cursor': 'pointer',
                    'color': 'black',
                    'text-decoration':'underline',
                    
    
                },
    
            },
            VToolbar: {
                style: {
                    'margin-top':'4em',
                    'background': 'antiquewhite', 
                    'color':'black',
                },},
            VContainer: {
                style: {
                    'background': 'inherit',
                    'width': 'auto',
                },
                VSheet: {

                    style: {
                        // 'background-color': 'rgba(0, 0, 0, 0.8)',
                        'background':'inherit',
                        
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
