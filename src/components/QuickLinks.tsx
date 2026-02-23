// src/components/QuickLinks.tsx
export function QuickLinks() {
    const links = [
        { title: "ajuda", icon: "help" },
        { title: "agências", icon: "map" },
        { title: "abra sua conta", icon: "user" },
        { title: "itau shop", icon: "bag" },
        { title: "segurança", icon: "lock" },
    ];

    return (
        <section className="w-full bg-white dark:bg-gray-950 py-8 border-b border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center overflow-x-auto gap-8 no-scrollbar">
                {links.map((link, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer min-w-[80px]">
                        <div className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-itau-orange transition-colors">
                            <span className="text-itau-orange text-xs font-bold uppercase">{link.icon[0]}</span>
                        </div>
                        <span className="text-gray-500 dark:text-gray-100 text-[11px] font-bold uppercase tracking-tighter">
                            {link.title}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}