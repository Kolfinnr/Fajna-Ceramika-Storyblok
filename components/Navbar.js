import Link from "next/link";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart, isOpen, toggleCart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<Link href="/" className="group">
  <span className="flex items-center gap-2">
    <span className="relative w-8 h-8 flex items-center justify-center bg-olive-500 rounded-lg text-white group-hover:bg-olive-600 transition-colors">
      <i data-lucide="amphora" className="w-5 h-5"></i>
    </span>
    <span className="font-semibold text-xl tracking-tight text-stone-900">
      Fajna Ceramika
    </span>
  </span>
</Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-base font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Start
          </Link>
          <Link href="/store" className="text-base font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Sklep
          </Link>
          <Link href="/about" className="text-base font-medium text-stone-600 hover:text-stone-900 transition-colors">
            O nas
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleCart}
            className="relative p-2 hover:bg-stone-200 rounded-full transition-colors group"
            aria-label="Koszyk"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
            aria-controls="cart-panel"
          >
            <i data-lucide="shopping-bag" className="w-5 h-5 text-stone-600 group-hover:text-stone-900"></i>
            {count > 0 && (
              <span
                className="absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full bg-olive-500 text-white text-xs font-semibold flex items-center justify-center"
                aria-live="polite"
              >
                {count}
              </span>
            )}
          </button>
          <button className="md:hidden p-2 hover:bg-stone-200 rounded-full transition-colors" aria-label="Menu">
            <i data-lucide="menu" className="w-5 h-5 text-stone-600"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
