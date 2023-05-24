import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FIRST_INDEX, ONE_ITEM_IN_CART } from '../constants';
import { CART_URL } from '../constants/url';
import { cartState, productSelector, serverState } from '../recoil';
import { CartItem } from '../types';
import { useFetchData } from './useFetchData';

export const useSetCart = (productId: number) => {
  const setCart = useSetRecoilState(cartState);
  const selectedProduct = useRecoilValue(productSelector(productId));

  const server = useRecoilValue(serverState);

  const { api } = useFetchData();

  const findCartItemIndex = (prev: CartItem[]) => {
    const cart = [...prev];
    const cartItemIndex = prev.findIndex((item) => item.id === productId);
    const alreadyHasCartItem = cartItemIndex >= FIRST_INDEX;

    return { cart, cartItemIndex, alreadyHasCartItem };
  };

  const removeProduct = (cart: CartItem[], cartItemIndex: number) => {
    if (cartItemIndex >= FIRST_INDEX) cart.splice(cartItemIndex, ONE_ITEM_IN_CART);

    return cart;
  };

  const updateCart = (value: string) => {
    const quantity = Number(value);
    api
      .patch(`${server}${CART_URL}/${productId}`, { productId, quantity })
      .then(() => {
        setCart((prev: CartItem[]) => {
          const { cart, cartItemIndex } = findCartItemIndex(prev);

          const updatedItem = { ...prev[cartItemIndex], quantity: Number(value) };
          cart[cartItemIndex] = updatedItem;

          return cart;
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const addToCart = (value: string) => {
    api
      .post(`${server}${CART_URL}`, { productId })
      .then(() => {
        setCart((prev: CartItem[]) => {
          const quantity = Number(value);

          const { cart, cartItemIndex } = findCartItemIndex(prev);

          if (value === '') return removeProduct(cart, cartItemIndex);

          return [
            ...prev,
            {
              id: productId,
              quantity: quantity,
              product: selectedProduct,
            },
          ];
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const removeItemFromCart = () => {
    api
      .delete(`${server}${CART_URL}/${productId}`, { productId })
      .then(() => {
        setCart((prev: CartItem[]) => {
          const { cart, cartItemIndex, alreadyHasCartItem } = findCartItemIndex(prev);

          if (alreadyHasCartItem) return removeProduct(cart, cartItemIndex);

          return prev;
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return { addToCart, removeItemFromCart, updateCart };
};
