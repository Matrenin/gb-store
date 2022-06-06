const api = "https://raw.githubusercontent.com/Matrenin/Test/main/response";

const app = new Vue({
    el: "#app",
    methods: {
        getJson(url) {
            return fetch(url)
                .then(response => response.json())
                .catch(err => console.log(err));
        }
    },
});