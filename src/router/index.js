import vue from "vue";
import vuerouter from "vue-router";
import register from "../components/register";
import signin from "../components/signin";
import createorder from "../components/createorder";
import home from "../components/home";

vue.use(vuerouter)
export default new vuerouter({
    routes:[
        {path:"/register",component: register},
        {path:"/home",component: home},
        {path:"/",component: home},
        {path:"/signin",component: signin},
        {path:"/createorder",component: createorder},
    ]
})