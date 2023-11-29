import { shoesArr } from "../data"
import { ADD, CLOSE, DELETE, VIEW } from "./constant"

const initialState = {
    listShoes: shoesArr,
    cart: [],
    selectedShoes: null
}

export let shoesShopReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            let cloneCart = [...state.cart];
            
            let index = cloneCart.findIndex(item => item.id == payload.id);
            if (index == -1) {
                let newShoes = {...payload, quantity: 1, amount: payload.price};
                cloneCart = [...cloneCart, newShoes];
            } else {
                cloneCart[index].quantity++;
                cloneCart[index].amount = cloneCart[index].price * cloneCart[index].quantity;
            }
            
            state.cart = cloneCart;
            return { ...state };
        
        case DELETE:
            let newCart = state.cart.filter((item) => {
                return item.id != payload;
            });
            state.cart = newCart;
            return { ...state };
        
        case VIEW:
            let selectedItem = state.listShoes.find((shoes) => {
                return shoes.id == payload;
            });
            state.selectedShoes = selectedItem;

            // use bootstrap modal to show the details
            const myModal = document.getElementById("myModal");
            if (myModal) {
                myModal.classList.add("show");
                myModal.style.display = "block";
            }
            return { ...state };
        
        case CLOSE:
            const myModalDetail = document.getElementById("myModal");
            if (myModalDetail) {
                myModalDetail.classList.remove("show");
                myModalDetail.style.display = "none";
            }
            state.selectedShoes = null;
            return { ...state }; 

        default:
            return state
    }
}
