// src/components/ServicesGrid.tsx
export function ServicesGrid() {
    const services = [
        { title: "cartões", desc: "escolha o cartão que combina com você e acumule benefícios." },
        { title: "empréstimos", desc: "crédito pessoal de forma rápida, segura e transparente." },
        { title: "seguros", desc: "proteção para você, sua família e seus bens mais valiosos." },
        { title: "investimentos", desc: "especialistas para ajudar seu dinheiro a render de verdade." }
    ];

    return (
        <section className="w-full bg-white dark:bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-50 mb-2">feito para você</h2>
                <p className="text-gray-500 dark:text-gray-100 mb-12">soluções pensadas no seu momento de vida.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => (
                        <div key={i} className="p-8 border border-gray-200 dark:border-gray-800 rounded-2xl group hover:border-itau-orange dark:hover:border-itau-orange transition-all cursor-pointer">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-50 mb-3">{item.title}</h3>
                            <p className="text-gray-400 dark:text-gray-200 text-sm mb-6 leading-relaxed">
                                {item.desc}
                            </p>
                            <span className="text-itau-orange font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                                saiba mais →
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}