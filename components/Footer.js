export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-500 text-sm">© 2024 Fajna Ceramika. Bielsko-Biała.</div>

          <div className="flex items-center gap-4 grayscale opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
              Płatności obsługuje
            </span>
            <div className="font-bold text-xl text-stone-800 tracking-tighter">
              <span className="text-[#a4c639]">Pay</span>U
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-10 bg-stone-200 rounded"></div>
              <div className="h-6 w-10 bg-stone-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
