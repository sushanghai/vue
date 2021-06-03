import App from "./App.js";
//挂载上去
new Vue({
    components: {
        App,
    },
    render:(h) => h(App),
}).$mount("#app");