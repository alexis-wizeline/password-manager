import React, { useState } from 'react';
import {useModal} from "../providers/modalProvider";
import {EyeIcon, EyeOff} from "lucide-react";


interface PasswordModalProps {
    onAccept: (item: {name: string, password: string}) => void;
    item:  {name: string, password: string}
}

const PasswordModal = ({ item, onAccept }: PasswordModalProps) => {
    const { setOpen } = useModal();

    const [visiblePassword, setVisiblePassword] = useState<boolean>(false);
    const [password, setPassword] = useState< {name: string, password: string}>({...item});

    return (
        <div className="fixed inset-0 flex w-screen h-screen justify-center overflow-y-auto bg-zinc-950/50 px-2 py-2 z-30 items-center">
            <div className="flex justify-items-center">
                <div className="min-w-0 rounded-3xl bg-zinc-950 shadow-lg ring-1 ring-white/10 forced-colors:outline p-(--gutter) [--gutter:--spacing(8)]">
                    <h2 className="text-lg/6 font-semibold text-balance text-white pb-2">Add new password</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="webpage" className="block text-sm font-medium text-gray-500">Web page</label>
                            <div className="relative mt-1">
                                <input className="flex-1 px-3 py-2 rounded-md bg-gray-800 border-gray-700 text-white placeholder:gray-500"
                                       type="text" id="webpage" placeholder="https://facebook.com" value={password.name}
                                       onChange={(e) => setPassword({...password, name: e.target.value})}/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-500">Password</label>
                            <div className="relative mt-1">
                                <input className="flex-1 px-3 py-2 rounded-md bg-gray-800 border-gray-700 text-white placeholder:gray-500"
                                       type={visiblePassword ? "text" : "password"}
                                       id="password"
                                       placeholder="Password"
                                       value={password.password}
                                       onChange={(e) => setPassword({...password, password: e.target.value})}   />
                                <button type="button" className="absolute inset-y-0 end-0 flex items-center z-10 px-5 cursor-pointer bg-gray-800 rounded-md text-neutral-600 border-gray-700 border-2">
                                    {!visiblePassword && <EyeIcon className="text-white" size={15} onClick={() => {setVisiblePassword(visiblePassword => !visiblePassword)}} />}
                                    {visiblePassword && <EyeOff className="text-white" size={15} onClick={() => {setVisiblePassword(visiblePassword => !visiblePassword)}} />}
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-row-reverse items-center justify-start gap-3">
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 font-medium rounded-lg border border-white/2 text-white shadow-2xs hover:cursor-default hover:bg-gray-800" onClick={() => setOpen(false)}>
                                Cancel
                            </button>
                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 font-medium rounded-lg border border-white/2 bg-gray-800 text-white hover:cursor-default hover:bg-gray-700" onClick={() => {
                                setOpen(false)
                                onAccept(password)
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