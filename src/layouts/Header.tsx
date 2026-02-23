// src/layouts/Header.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-20 bg-itau-orange dark:bg-gray-950 border-b border-white/10 dark:border-gray-800 flex items-center sticky top-0 z-50">
            <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <div className="bg-itau-orange border-2 border-white p-2 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-2xl tracking-tighter italic">Itaú</span>
                    </div>

                    <nav className="hidden lg:flex items-center gap-8 text-white dark:text-gray-50 font-medium text-sm">
                        <Link href="#" className="hover:opacity-70 transition-opacity">para você</Link>
                        <Link href="#" className="hover:opacity-70 transition-opacity">para empresas</Link>
                        <Link href="#" className="hover:opacity-70 transition-opacity">investimentos</Link>
                        <Link href="#" className="hover:opacity-70 transition-opacity">ajuda</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center bg-white/10 dark:bg-gray-900 border border-transparent focus-within:border-white rounded px-3 py-2 transition-all">
                        <input
                            type="text"
                            placeholder="o que você procura?"
                            className="bg-transparent text-white dark:text-gray-50 placeholder-white/60 outline-none text-sm w-40"
                        />
                    </div>
                    <button className="bg-itau-blue dark:bg-gray-50 text-white dark:text-gray-950 px-6 py-2.5 rounded font-bold text-sm hover:bg-blue-800 dark:hover:bg-gray-200 transition-colors">
                        acessar
                    </button>
                </div>
            </div>
        </header>
    );
}