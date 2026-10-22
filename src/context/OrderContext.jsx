import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProduct, products } from "../data/products";

const OrderContext = createContext(null);

const STORAGE_KEY = "coffee-order";
const DELIVERY_FEE = 1;
const DELIVERY_FEE_BEFORE_DISCOUNT = 2;

const defaultOrder = {
  productId: products[0].id,
  size: "M",
  quantity: 1,
  method: "deliver",
};

function readSavedOrder() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    return saved && getProduct(saved.productId) ? { ...defaultOrder, ...saved } : defaultOrder;
  } catch {
    return defaultOrder;
  }
}

export function OrderProvider({ children }) {
  const [order, setOrder] = useState(readSavedOrder);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(order));
    } catch {
      // storage can be blocked (private mode) - the order still works in memory
    }
  }, [order]);

  const value = useMemo(() => {
    const product = getProduct(order.productId);
    const isDelivery = order.method === "deliver";
    const subtotal = product.price * order.quantity;
    const deliveryFee = isDelivery ? DELIVERY_FEE : 0;

    return {
      order,
      product,
      subtotal,
      deliveryFee,
      deliveryFeeBeforeDiscount: DELIVERY_FEE_BEFORE_DISCOUNT,
      total: subtotal + deliveryFee,
      favourites,
      selectProduct: (productId, size = "M") =>
        setOrder((prev) => ({ ...prev, productId, size, quantity: prev.productId === productId ? prev.quantity : 1 })),
      setMethod: (method) => setOrder((prev) => ({ ...prev, method })),
      increase: () => setOrder((prev) => ({ ...prev, quantity: Math.min(prev.quantity + 1, 20) })),
      decrease: () => setOrder((prev) => ({ ...prev, quantity: Math.max(prev.quantity - 1, 1) })),
      toggleFavourite: (id) =>
        setFavourites((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id])),
    };
  }, [order, favourites]);

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrder must be used inside OrderProvider");
  return context;
}
