// src/components/LoginBox.tsx
"use client";

import { useState } from "react";

export function LoginBox() {
    const [agencia, setAgencia] = useState("");
    const [conta, setConta] = useState("");

    return (
        <div className="w-full max-w-sm bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 p-6 rounded-xl shadow-xl">
            <h3 className="text-gray-800 dark:text-gray-50 font-bold text-xl mb-4">acesse sua conta</h3>
            <div className="space-y-4">
                <div className="flex gap-3">
                    <div className="w-1/3">
                        <label className="block text-xs text-gray-500 dark:text-gray-100 mb-1">agência</label>
                        <input
                            type="text"
                            value={agencia}
                            onChange={(e) => setAgencia(e.target.value)}
                            placeholder="0000"
                            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded px-3 py-2 text-gray-800 dark:text-gray-50 outline-none focus:border-itau-orange"
                        />
                    </div>
                    <div className="w-2/3">
                        <label className="block text-xs text-gray-500 dark:text-gray-100 mb-1">conta</label>
                        <input
                            type="text"
                            value={conta}
                            onChange={(e) => setConta(e.target.value)}
                            placeholder="00000-0"
                            className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded px-3 py-2 text-gray-800 dark:text-gray-50 outline-none focus:border-itau-orange"
                        />
                    </div>
                </div>
                <button className="w-full bg-itau-blue dark:bg-gray-50 text-white dark:text-gray-950 font-bold py-3 rounded hover:bg-blue-800 dark:hover:bg-gray-200 transition-colors">
                    continuar
                </button>
                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-itau-orange font-bold cursor-pointer hover:underline">esqueci minha senha</span>
                    <span className="text-xs text-gray-400 dark:text-gray-200 cursor-pointer hover:underline">ainda não sou cliente</span>
                </div>
            </div>
        </div>
    );
}