Vue.component("search", {
    data() {
        return {
            userSearch: "",
        }
    },
    template: `
    <form action="#" class="header__search" @submit.prevent="$root.$refs.products.filter(userSearch)">
        <input type="checkbox" id="input-search">
        <label for="input-search">
            <img src="img/search.svg" alt="search img">
        </label>
        <input class="header__search-input" type="search" v-model="userSearch">
        <button type="submit"></button>
    </form>
    `
});