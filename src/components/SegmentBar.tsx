// src/components/SegmentBar.tsx
import Link from "next/link";

export function SegmentBar() {
    const segments = ["para você", "para empresas", "itau personalité", "itau private", "itau bba"];

    return (
        <div className="w-full bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 hidden lg:block">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-start h-10 gap-6">
                {segments.map((seg, i) => (
                    <Link
                        key={i}
                        href="#"
                        className={`text-[11px] font-bold uppercase tracking-wider ${i === 0 ? "text-itau-orange border-b-2 border-itau-orange h-full flex items-center" : "text-gray-500 dark:text-gray-100 hover:text-itau-orange transition-colors"}`}
                    >
                        {seg}
                    </Link>
                ))}
            </div>
        </div>
    );
}