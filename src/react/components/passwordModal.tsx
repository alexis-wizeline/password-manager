import React, { useCallback, useState } from 'react';
import { useModal } from "../providers/modalProvider";
import { EyeIcon, EyeOff, RefreshCcw } from "lucide-react";

import { Password } from "../../db/entities";
import { PasswordGeneratorOptions, generatePassword } from "../utils/generatePassword";


interface PasswordModalProps {
    onAccept: (item: Password) => Promise<void>;
    item: Password;
}


const PasswordModal = ({ item, onAccept }: PasswordModalProps) => {
    const { setOpen } = useModal();

    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    const [options, setOptions] = useState<PasswordGeneratorOptions>({ length: 8, uppercase: false, symbols: false, numbers: false });
    const [password, setPassword] = useState<Password>({ ...item });

    const updatePassword = useCallback((opt: PasswordGeneratorOptions) => {

        const pass: string = generatePassword(opt);
        setOptions({ ...opt });
        setPassword({ ...item, password: pass });

    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="flex justify-items-center">
                <div className="w-full max-w-md overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl ring-1 ring-white/10 p-6 mt-100">
                    <h2 className="text-xl font-bold tracking-light text-white mb-6">Add new password</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="webpage" className="block text-sm font-medium text-gray-500">Web page</label>
                            <div className="relative mt-1">
                                <input className="w-full rounded-xl border border-white/5 bg-zinc-950/50 px-4 py-3 text-sm
                                text-white placeholder-zinc-500 shdow-inner outline-none transition-all focus:border-brand/50 focus:ring-4 focus:ring-brand/10"
                                    type="text" id="webpage" placeholder="https://facebook.com" value={password.webPage}
                                    onChange={(e) => setPassword({ ...password, webPage: e.target.value })} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-500">Password</label>
                            <div className="relative mt-1 flex gap-2">
                                <input className="flex-1 rounded-xl border border-white/5 bg-zinc-950/50 px-4 py-3 text-sm text-white
                                place-holder-zinc-500 shadow-inner outline-none transition-all focus:border-brand/50 focus:ring-4 focus:ring-brand/10"
                                    type={visiblePassword ? "text" : "password"}
                                    id="password"
                                    placeholder="Password"
                                    value={password.password}
                                    onChange={(e) => setPassword({ ...password, password: e.target.value })} />
                                <button type="button" className="flex items-center justify-center rounded-xl border border-white/5 bg-zinc-950/50
                                p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                                    onClick={() => updatePassword(options)}>
                                    <RefreshCcw className="text-gray-500" size={18} />
                                </button>
                                <button type="button" className=" flex items-center justify-center rounded-xl border border-white/5 bg-zinc-950/50
                                p-3 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                                    onClick={() => { setVisiblePassword(visiblePassword => !visiblePassword) }}>
                                    {!visiblePassword && <EyeIcon className="text-gray-500" size={18} />}
                                    {visiblePassword && <EyeOff className="text-gray-500" size={18} />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="relative mt-1">
                                <label htmlFor="range" className="block text-sm font-medium text-gray-500">length: {options.length}</label>
                                <input type="range" min="1" max="50" defaultValue="8" className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand"
                                    onChange={e => updatePassword({ ...options, length: Number(e.target.value) })} />
                                <div className="flex-row">
                                    <label className="text-sm font-medium text-gray-500">
                                        <input type="checkbox" className="mx-2 h-4 w-4 rounded border-white/5 bg-zinc-950/50 text-brand focus:ring-brand" onChange={() => updatePassword({
                                            ...options,
                                            uppercase: !options.uppercase,
                                        })} />
                                        Uppercases
                                    </label>
                                    <label className="text-sm font-medium text-gray-500">
                                        <input type="checkbox" className="mx-2 h-4 w-4 rounded border-white/5 bg-zinc-950/50 text-brand focus:ring-brand" onChange={() => updatePassword({
                                            ...options,
                                            numbers: !options.numbers,
                                        })} />
                                        Numbers
                                    </label>
                                    <label className="text-sm font-medium text-gray-500">
                                        <input type="checkbox" className="mx-2 h-4 w-4 rounded border-white/5 bg-zinc-950/50 text-brand focus:ring-brand" onChange={() => updatePassword({
                                            ...options,
                                            symbols: !options.symbols,
                                        })} />
                                        Symbols
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-row-reverse items-center gap-3">
                            <button type="button" className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 
                            hover:text-white hover:bg-white/5 transition-colors" onClick={() => setOpen(false)}>
                                Cancel
                            </button>
                            <button type="button" className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold
                            text-white shadow-lg shadow-brand/20 transition-all hover:bg-indigo-500 hover:shadow-brand/40
                            active:scale-[0.98]" onClick={async () => {
                                    setOpen(false)
                                    await onAccept(password)
                                }}>
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordModal;