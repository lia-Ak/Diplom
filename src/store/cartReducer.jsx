export const cartActionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  INSTANT_REMOVE_FROM_CART: 'INSTANT_REMOVE_FROM_CART',
  EMPTY_CART: 'EMPTY_CART'
};

function loadCartFromLocalStorage() {
  try {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error parsing cart data from localStorage:', error);
    return [];
  }
}

export const selectCartItemCount = (state) => {
  const cart = state.cartData;
  return cart.reduce((total, item) => total + item.count, 0);
};

let initialCartState = loadCartFromLocalStorage();

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART: {
      const { id, product } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        return [
          ...state.slice(0, existingItemIndex),
          {
            ...state[existingItemIndex],
            count: state[existingItemIndex].count + 1,
          },
          ...state.slice(existingItemIndex + 1),
        ];
      } else {
        return [...state, { id, product, count: 1 }];
      }
    }
    case cartActionTypes.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const existingItemIndex = state.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        if (state[existingItemIndex].count > 1) {
          return [
            ...state.slice(0, existingItemIndex),
            {
              ...state[existingItemIndex],
              count: state[existingItemIndex].count - 1,
            },
            ...state.slice(existingItemIndex + 1),
          ];
        } else {
          return [
            ...state.slice(0, existingItemIndex),
            ...state.slice(existingItemIndex + 1),
          ];
        }
      }
      return state;
    }
    case cartActionTypes.INSTANT_REMOVE_FROM_CART: {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    }
    case cartActionTypes.EMPTY_CART: {
      return []
    }
    default:
      return state;
  }
};

export const addToCartAction = (id, product) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: { id, product },
});

export const removeFromCartAction = (id) => ({
  type: cartActionTypes.REMOVE_FROM_CART,
  payload: { id },
});

export const instantRemoveFromCartAction = (id) => ({
  type: cartActionTypes.INSTANT_REMOVE_FROM_CART,
  payload: { id },
});

export const emptyCartAction = () => ({
  type: cartActionTypes.EMPTY_CART,
});