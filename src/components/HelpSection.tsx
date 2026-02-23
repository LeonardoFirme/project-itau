// src/components/HelpSection.tsx
export function HelpSection() {
    return (
        <section className="w-full bg-white dark:bg-gray-950 py-16 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-gray-800 dark:text-gray-50 text-2xl font-bold mb-4">precisa de ajuda?</h2>
                <p className="text-gray-400 dark:text-gray-200 mb-10">encontre os canais de atendimento e as respostas que você procura.</p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-50 px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                        perguntas frequentes
                    </button>
                    <button className="border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-50 px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                        falar no whatsapp
                    </button>
                    <button className="border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-50 px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                        telefones
                    </button>
                </div>
            </div>
        </section>
    );
}