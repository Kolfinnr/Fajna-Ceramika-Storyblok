import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("fajnaCart")) || [];
      setCart(stored);
    } catch (error) {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fajnaCart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo(
    () => ({
      cart,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((prev) => !prev),
      addItem: (item) =>
        setCart((prev) => {
          const existing = prev.find((entry) => entry.id === item.id);
          if (existing) {
            return prev.map((entry) =>
              entry.id === item.id ? { ...entry, qty: entry.qty + 1 } : entry
            );
          }
          return [...prev, { ...item, qty: 1 }];
        }),
    }),
    [cart, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
