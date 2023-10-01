import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import './registerServiceWorker';
import {createSupabaseClient} from "./services/supabase"

const pinia = createPinia()


/*****************************************************************************/
/* PRIME VUE CSS */
/*****************************************************************************/
import "/node_modules/primeflex/primeflex.css";
//core
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';

/*********************************************
 * IONIC
 *********************************************/
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
// import './theme/variables.css';

/*****************************************************************************/
/* PRIME VUE - IMPORT COMPONENTS */
/*****************************************************************************/
import PrimeVue from 'primevue/config';


import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import AutoComplete from "primevue/autocomplete";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Badge from "primevue/badge";
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import Checkbox from "primevue/checkbox";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import DataView from "primevue/dataview";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import Galleria from "primevue/galleria";
import InlineMessage from "primevue/inlinemessage";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputText from "primevue/inputtext";
import Knob from "primevue/knob";
import Menu from "primevue/menu";
import Message from "primevue/message";
import MultiSelect from "primevue/multiselect";
import Password from "primevue/password";
import ProgressBar from "primevue/progressbar";
import RadioButton from "primevue/radiobutton";
import Rating from "primevue/rating";
import ScrollPanel from "primevue/scrollpanel";
import Sidebar from "primevue/sidebar";
import Slider from "primevue/slider";
import SelectButton from "primevue/selectbutton";
import TabMenu from "primevue/tabmenu";
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import ToggleButton from "primevue/togglebutton";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import ProgressSpinner from "primevue/progressspinner";
/*****************************************************************************/
/* PRIME VUE IMPORT DIRECTIVE */
/*****************************************************************************/
import StyleClass from "primevue/styleclass";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";


/*********************************************
 * FONT AWESOME
 *********************************************/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)


const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(IonicVue)
  .use(PrimeVue)
  .use(router)
  .use(pinia)


/*****************************************************************************/
/* PRIME VUE - COMPONENTS */
/*****************************************************************************/
app.component("Accordion", Accordion);
app.component("AccordionTab", AccordionTab);
app.component("AutoComplete", AutoComplete);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Badge", Badge);
app.component("Breadcrumb", Breadcrumb);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("Card", Card);
app.component("Carousel", Carousel);
app.component("Checkbox", Checkbox);
app.component("Chip", Chip);
app.component("Chips", Chips);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("DataView", DataView);
app.component("Dialog", Dialog);
app.component("Divider", Divider);
app.component("Dropdown", Dropdown);
app.component("FileUpload", FileUpload);
app.component("Galleria", Galleria);
app.component("InlineMessage", InlineMessage);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);
app.component("InputSwitch", InputSwitch);
app.component("InputText", InputText);
app.component("Knob", Knob);
app.component("Menu", Menu);
app.component("Message", Message);
app.component("MultiSelect", MultiSelect);
app.component("Password", Password);
app.component("ProgressBar", ProgressBar);
app.component("RadioButton", RadioButton);
app.component("Rating", Rating);
app.component("ScrollPanel", ScrollPanel);
app.component("Sidebar", Sidebar);
app.component("SelectButton", SelectButton);
app.component("Slider", Slider);
app.component("TabMenu", TabMenu);
app.component("TabPanel", TabPanel);
app.component("TabView", TabView);
app.component("Tag", Tag);
app.component("Textarea", Textarea);
app.component("ToggleButton", ToggleButton);
app.component("Toast", Toast);
app.component("ProgressSpinner", ProgressSpinner);

/*****************************************************************************/
/* PRIME VUE - DIRECTIVE */
/*****************************************************************************/
app.directive("styleclass", StyleClass);
app.directive("ripple", Ripple);
app.directive("badge", BadgeDirective);
  
router.isReady().then(() => {
  app.mount('#app');
});

createSupabaseClient();