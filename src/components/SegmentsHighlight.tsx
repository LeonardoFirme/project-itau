// src/components/SegmentsHighlight.tsx
export function SegmentsHighlight() {
    return (
        <section className="w-full bg-gray-950 py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
                {/* Personnalité */}
                <div className="p-10 border border-gray-800 rounded-3xl bg-linear-to-br from-gray-900 to-black group cursor-pointer hover:border-orange-900 transition-all">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">itau personnalité</span>
                    <h3 className="text-gray-50 text-3xl font-bold mt-4 mb-6 leading-tight">exclusividade em cada detalhe da sua jornada.</h3>
                    <p className="text-gray-200 mb-8">assessoria especializada e benefícios feitos para o seu estilo de vida.</p>
                    <button className="text-orange-400 font-bold group-hover:translate-x-2 transition-transform underline underline-offset-8">conhecer personnalité</button>
                </div>

                {/* Empresas */}
                <div className="p-10 border border-gray-800 rounded-3xl bg-gray-900 group cursor-pointer hover:border-itau-orange transition-all">
                    <span className="text-itau-orange text-xs font-bold uppercase tracking-widest">itau empresas</span>
                    <h3 className="text-gray-50 text-3xl font-bold mt-4 mb-6 leading-tight">soluções inteligentes para o seu negócio decolar.</h3>
                    <p className="text-gray-200 mb-8">gestão de fluxo de caixa, crédito sob medida e muito mais.</p>
                    <button className="text-itau-orange font-bold group-hover:translate-x-2 transition-transform underline underline-offset-8">conhecer empresas</button>
                </div>
            </div>
        </section>
    );
}