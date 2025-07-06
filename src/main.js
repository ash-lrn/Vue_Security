import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router/index';
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'


import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Row from 'primevue/row';    
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Fluid from 'primevue/fluid';
import Toast from 'primevue/toast'
import ConfirmDialog from 'primevue/confirmdialog'
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';


import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';



const app = createApp(App)
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        // options: {
        //     darkModeSelector: '.app-dark'
        // }
    }
});

app.component('Button', Button)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Row', Row)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Fluid', Fluid)
app.component('Textarea', Textarea)
app.component('Select', Select)
app.component('Toast', Toast)
app.component('ConfirmDialog', ConfirmDialog)

app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app')

