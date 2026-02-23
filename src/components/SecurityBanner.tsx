// src/components/SecurityBanner.tsx
export function SecurityBanner() {
    return (
        <section className="w-full bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-linear-to-br from-itau-blue to-blue-900 dark:from-gray-900 dark:to-black rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">segurança</span>
                        <h2 className="text-white text-3xl lg:text-4xl font-bold mt-4 mb-6 leading-tight">
                            sua vida protegida e seus dados também.
                        </h2>
                        <p className="text-white/80 text-lg mb-8">
                            conheça nossas dicas de segurança e saiba como identificar e se proteger de golpes.
                        </p>
                        <button className="bg-white text-itau-blue dark:bg-gray-50 dark:text-gray-950 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all">
                            central de segurança
                        </button>
                    </div>
                    <div className="w-full lg:w-1/3 flex justify-center">
                        {/* Ícone de Escudo/Segurança Placeholder */}
                        <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 rounded-lg rotate-45 flex items-center justify-center">
                                <span className="text-white -rotate-45 font-black">S</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}