Vue.component("order", {
    template: `
    <div class="cart__left">
        <order-item v-for="item of $root.$refs.cart.cartItems" :key="item.id" :item="item"></order-item>
        
        <div class="cart__btn-box">
            <a href="#">CLEAR SHOPPING CART</a>
            <a href="#">CONTINUE SHOPPING</a>
        </div>
    </div>
    `
});

Vue.component("order-item", {
    props: ["item"],
    template: `
        <div class="cart__item">
            <div class="cart__photo">
                <img :src="item.img" alt="cart-photo">
            </div>
            <div class="cart__description">
                <h3>{{ item.title }}</h3>
                <p>Price: <span>{{ item.price }} $</span></p>
                <p>Color: Red</p>
                <p>Size: Xl</p>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity">
            </div>
            <a href="#"></a>
        </div>
    `
});