import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Loginnew from "./components/Loginnew.vue";
import EDUMain from "./components/EDUMain.vue";
import Signup from "./components/Signup.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/",
            name: "Loginnew",
            component: Loginnew
        },
        {
            path: "/Signup",
            name: "Signup",
            component: Signup
        },
        {
            path: "/Dashboard",
            name: "EDUMain",
            component: EDUMain
        },

    ]
})