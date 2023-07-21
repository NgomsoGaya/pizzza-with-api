function Counter() {
  return {
    pizzas: [],
    cartPizzas: [],
    cartTotal: 0.0,
    username: "NgomsoGaya",
      cartId: "6o9Pu4u8zB",
    paymentAmount: 0,
    getCart() {
      const getCartURL = `https://pizza-api.projectcodex.net/api/pizza-cart/${this.cartId}/get`;
      return axios.get(getCartURL);
    },
    addPizza(pizzaId) {
      return axios.post(
        " https://pizza-api.projectcodex.net/api/pizza-cart/add",
        {
          cart_code: this.cartId,
          pizza_id: pizzaId,
        }
      );
    },
    removePizza(pizzaId) {
      return axios.post(
        " https://pizza-api.projectcodex.net/api/pizza-cart/remove",
        {
          cart_code: this.cartId,
          pizza_id: pizzaId,
        }
      );
    },
    showCartData() {
      this.getCart().then((result) => {
        const cartData = result.data;
        this.cartPizzas = cartData.pizzas;
        this.cartTotal = cartData.total;
      });
    },
    pay(amount) {
     return axios.post("https://pizza-api.projectcodex.net/api/pizza-cart/pay", {
        cart_code: this.cartId,
        amount,
      });
    },
    init() {
      axios
        .get("https://pizza-api.projectcodex.net/api/pizzas")
        .then((result) => {
          this.pizzas = result.data.pizzas;
        });
      this.showCartData();
    },
    addPizzaToCart(pizzaId) {
      this.addPizza(pizzaId).then(this.showCartData());
    },
    removePizzaFromCart(pizzaId) {
      this.removePizza(pizzaId).then(this.showCartData());
      },
      payForCart() {
        
    }
  };
}
