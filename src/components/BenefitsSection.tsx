// src/components/BenefitsSection.tsx
export function BenefitsSection() {
    const benefits = [
        {
            title: "iphone pra sempre",
            desc: "escolha seu modelo e pague em parcelas que cabem no seu bolso.",
            label: "conheça"
        },
        {
            title: "itau shop",
            desc: "compre com cashback e parcelamento exclusivo direto no app.",
            label: "comprar"
        },
        {
            title: "pontos e milhas",
            desc: "transforme seus gastos no cartão em viagens e produtos.",
            label: "ver mais"
        }
    ];

    return (
        <section className="w-full bg-white dark:bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-gray-800 dark:text-gray-50 text-2xl font-bold mb-10">
                    vantagens de ser cliente
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((item, i) => (
                        <div key={i} className="flex flex-col border-b border-gray-200 dark:border-gray-800 pb-8 md:border-b-0 md:border-r last:border-0 md:pr-8">
                            <h3 className="text-itau-orange text-lg font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-500 dark:text-gray-100 text-sm mb-6 leading-relaxed">
                                {item.desc}
                            </p>
                            <button className="text-gray-800 dark:text-gray-50 font-bold text-sm text-left hover:underline">
                                {item.label} →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}