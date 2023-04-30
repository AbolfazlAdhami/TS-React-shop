import { createContext, useContext, ReactNode, useState } from "react";
import Cart from "../Components/Cart";
import { useLocalStorage } from "../Hooks/useLocalStorage";

type CartItemsType = {
  id: number;
  quantity: number;
};

type CartContextType = {
  getQuantity: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  cart: CartItemsType[];
  cartItemsQuantity: number;
  openHandler: () => void;
  closeHandler: () => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextType);

export function useCartContex() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useLocalStorage<CartItemsType[]>("Shoppingp-cart", []);

  function getQuantity(id: number) {
    return cart.find((item) => id == item.id)?.quantity || 0;
  }
  function addItem(id: number) {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id == id)?.quantity == null) {
        return [...currentItems, { id, quantity: 1 }];
      }
      return currentItems.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  }
  function decreaseItem(id: number) {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id == id)?.quantity == 1) {
        return currentItems.filter((item) => item.id != id);
      }
      return currentItems.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  }
  function removeItem(id: number) {
    setCart((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  }
  const cartItemsQuantity = cart.reduce((quantity, item) => quantity + item.quantity, 0);

  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ getQuantity, addItem, decreaseItem, removeItem, cartItemsQuantity, cart, closeHandler, openHandler }}>
      {children}
      <Cart isShow={isOpen} />
    </CartContext.Provider>
  );
};
