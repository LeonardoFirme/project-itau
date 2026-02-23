// src/layouts/Footer.tsx
import Link from "next/link";

export default function Footer() {
    const columns = [
        {
            title: "Nossos produtos",
            links: ["Conta corrente", "Cartões de crédito", "Consórcio", "Seguros", "Investimentos", "Renegociação"]
        },
        {
            title: "Itaú",
            links: [
                "Relações com investidores", "feito.itaú", "Carreiras", "Imprensa",
                "Sustentabilidade", "Integridade e Ética", "Análises econômicas",
                "Termos de uso", "Privacidade", "Fornecedores", "Estatuto de acessibilidade"
            ]
        },
        {
            title: "Ajuda",
            links: ["Central de ajuda", "Canais Itaú", "Encontre agências", "Segurança", "Acessos não correntista", "Consumidor.gov"]
        }
    ];

    const extra = {
        title: "Confira também",
        links: ["Para empresas", "Para poder público", "Fundeb", "Pacotes e tarifas"]
    };

    const contact = {
        title: "Fale com o Itaú",
        links: ["Para você", "Sac 0800 728 0728", "Ouvidoria 0800 570 0011", "Denúncia"]
    };

    return (
        <footer className="w-full bg-neutral-600 dark:bg-gray-950 pt-16 border-t border-gray-700 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Colunas Principais */}
                    {columns.map((col, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <h4 className="text-white dark:text-gray-50 font-bold text-sm">
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {col.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-300 dark:text-gray-200 text-sm hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Coluna 4: Ajuda Extra */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white dark:text-gray-50 font-bold text-sm">{extra.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {extra.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-300 dark:text-gray-200 text-sm hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Coluna 5: Contato, Redes e App */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white dark:text-gray-50 font-bold text-sm">{contact.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {contact.links.map((link, j) => (
                                    <li key={j}>
                                        <Link href="#" className="text-gray-300 dark:text-gray-200 text-sm hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white dark:text-gray-50 font-bold text-sm uppercase text-[10px] tracking-widest">Acompanhe</h4>
                            <div className="flex gap-4">
                                {['instagram', 'youtube', 'facebook', 'twitter'].map((social) => (
                                    <div key={social} className="text-white hover:text-itau-orange cursor-pointer transition-colors text-xl">
                                        <span className="sr-only">{social}</span>
                                        {/* Placeholder para ícone */}
                                        <div className="w-5 h-5 bg-white/20 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white dark:text-gray-50 font-bold text-sm uppercase text-[10px] tracking-widest">Baixe o app</h4>
                            <div className="flex flex-col gap-2">
                                <div className="bg-black border border-gray-600 rounded px-3 py-1.5 flex items-center gap-2 cursor-pointer w-32">
                                    <div className="w-4 h-4 bg-white/20" />
                                    <span className="text-white text-[9px] font-bold">App Store</span>
                                </div>
                                <div className="bg-black border border-gray-600 rounded px-3 py-1.5 flex items-center gap-2 cursor-pointer w-32">
                                    <div className="w-4 h-4 bg-white/20" />
                                    <span className="text-white text-[9px] font-bold">Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barra Laranja de Conversão Final (Identidade da Imagem) */}
            <div className="w-full bg-itau-orange py-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-orange-600 transition-colors">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
                <span className="text-white font-bold text-sm">Abra sua conta</span>
            </div>
        </footer>
    );
}