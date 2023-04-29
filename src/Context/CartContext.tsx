import { createContext, useContext, ReactNode, useState } from "react";

type CartItemsType = {
  id: number;
  quantity: number;
};

type CartContextType = {
  getQuantity: (id: number) => number;
  addItem: (id: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
};

const CartContext = createContext({} as CartContextType);

export function useCartContex() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItemsType[]>([]);

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
          return { ...item, quantity: item.quantity + 1 };
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
  return <CartContext.Provider value={{ getQuantity, addItem, decreaseItem, removeItem }}>{children}</CartContext.Provider>;
};
