let cartEl = document.querySelector(".cart__btn");
let basketEl = document.querySelector(".basket");
let basketTotalValueEl = document.querySelector(".basket__total-value");
let basketCounterEl = document.querySelector(".cart__btn > span");
let basketTotalEl = document.querySelector(".basket__total");

cartEl.addEventListener("click", event => {
    basketEl.classList.toggle("hidden");
});

let basket = {};

document.querySelector(".content__box").addEventListener("click", event => {
    if (!event.target.closest(".content__item-btn")) {
        return;
    }
    let featuredItem = event.target.closest(".content__item");
    let id = featuredItem.dataset.id;
    let name = featuredItem.dataset.name;
    let price = featuredItem.dataset.price;
    console.log(id, name, price);
    addToCart(id, name, price);
});

function addToCart(id, name, price) {
    if (!(id in basket)) {
        basket[id] = {id, name, price, count: 0};
    }
    basket[id].count++;
    basketCounterEl.textContent = getTotalBasketCount().toString();
    basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
    renderProductInBasket(id);
}

function getTotalBasketCount() {
    return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
}

function getTotalBasketPrice() {
    return Object.values(basket).reduce((acc, product) => acc + product.count * product.price, 0);
}

function renderProductInBasket(id) {
    let basketRowEl = basketEl.querySelector(`.basket__row[data-productId="${id}"]`);
    if (!basketRowEl) {
        renderNewProductInBasket(id);
        return;
    }
    basketRowEl.querySelector(".productCount").textContent = basket[id].count;
    basketRowEl.querySelector(".productTotalRow").textContent = basket[id].count * basket[id].price;
}

function renderNewProductInBasket(productId) {
    const productRow = `
        <div class="basket__row" data-productId="${productId}">
            <div>${basket[productId].name}</div>
            <div>
                <span class="productCount">${basket[productId].count}</span>шт.
            </div>
            <div>${basket[productId].price}</div>
            <div>
                <span class="productTotalRow">${(basket[productId].price * basket[productId].count)}</span>
            </div>
            <button class="remove__basket">&times;</button>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}