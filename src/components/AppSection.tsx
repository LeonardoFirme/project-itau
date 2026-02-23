// src/components/AppSection.tsx
export function AppSection() {
    return (
        <section className="w-full bg-white dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-gray-800 dark:text-gray-50 text-4xl font-bold mb-6">
                        o banco na palma <br /> da sua mão.
                    </h2>
                    <p className="text-gray-500 dark:text-gray-100 text-lg mb-8">
                        acompanhe seu saldo, faça transferências, pague contas e invista de onde estiver com total segurança.
                    </p>
                    <div className="flex gap-4">
                        <div className="h-12 w-36 bg-gray-800 dark:bg-gray-50 rounded-lg flex items-center justify-center text-white dark:text-gray-950 text-xs font-bold">App Store</div>
                        <div className="h-12 w-36 bg-gray-800 dark:bg-gray-50 rounded-lg flex items-center justify-center text-white dark:text-gray-950 text-xs font-bold">Google Play</div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end gap-8">
                    <div className="hidden sm:block p-4 border border-gray-200 dark:border-gray-800 rounded-2xl">
                        <div className="w-32 h-32 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-400">QR Code</div>
                        <p className="text-center text-[10px] font-bold text-gray-400 mt-2 uppercase">aponte a câmera</p>
                    </div>
                    <div className="w-64 h-112.5 bg-gray-800 rounded-[3rem] border-8 border-gray-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-b from-itau-orange to-orange-600 flex items-center justify-center">
                            <span className="text-white font-black italic text-3xl">Itaú</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}