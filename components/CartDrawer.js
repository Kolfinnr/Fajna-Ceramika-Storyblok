import { useEffect } from "react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { cart, isOpen, closeCart } = useCart();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        closeCart();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      id="cart-panel"
      className={`fixed inset-0 z-50 ${isOpen ? "" : "hidden"}`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-stone-900/40" onClick={closeCart} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Koszyk"
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 flex flex-col"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Twój koszyk</h2>
          <button
            type="button"
            className="p-2 rounded-full hover:bg-stone-100"
            onClick={closeCart}
            aria-label="Zamknij koszyk"
          >
            <i data-lucide="x" className="w-5 h-5"></i>
          </button>
        </div>
        <div className="mt-6 flex-1 overflow-y-auto space-y-4 text-sm text-stone-600">
          {cart.length === 0 ? (
            <p className="text-stone-500">Twój koszyk jest pusty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border border-stone-100 rounded-lg p-4">
                <div>
                  <p className="font-medium text-stone-900">{item.title}</p>
                  <p className="text-stone-500">Ilość: {item.qty}</p>
                </div>
                <span className="font-medium text-stone-900">{item.price * item.qty} PLN</span>
              </div>
            ))
          )}
        </div>
        <div className="border-t border-stone-200 pt-4 mt-6 space-y-4">
          <div className="flex items-center justify-between text-base font-medium text-stone-900">
            <span>Razem</span>
            <span>{total} PLN</span>
          </div>
          <a
            href="https://secure.payu.com/pay/"
            className="w-full inline-flex items-center justify-center rounded-lg bg-olive-600 px-4 py-3 text-white font-medium hover:bg-olive-500 transition-colors"
            aria-label="Przejdź do płatności PayU"
          >
            Przejdź do płatności PayU
          </a>
        </div>
      </div>
    </div>
  );
}
