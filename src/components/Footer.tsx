export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-slate-500 text-xs font-medium tracking-wide">
          © {new Date().getFullYear()} ORODUEN FORTUNE CHICHI. ALL RIGHTS RESERVED.
        </p>
        <p className="mt-2 text-slate-600 text-[10px] uppercase tracking-tighter">
          Built with React • Tailwind 4 • Motion
        </p>
      </div>
    </footer>
  );
}
