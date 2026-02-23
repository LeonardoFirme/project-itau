// src/components/HeroBanner.tsx
export function HeroBanner() {
    return (
        <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-gray-50 leading-tight">
                o que você <br /> precisa hoje?
            </h1>
            <p className="text-lg lg:text-xl text-white/90 dark:text-gray-100 max-w-md">
                conheça as soluções que o Itaú tem para você e para sua empresa.
            </p>
            <div className="pt-4 flex gap-4">
                <button className="bg-itau-orange text-white px-6 py-3 rounded font-bold hover:bg-[#D66500] transition-colors">
                    abra sua conta
                </button>
            </div>
        </div>
    );
}