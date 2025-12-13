import React from 'react';

import PasswordCard from "./passwordCard";
import OpenModalBtn from "./openModalBtn";

import usePasswords from "../hooks/usePasswords";




const DashBoard: React.ComponentType = () => {
    const { items, addItem } = usePasswords();


    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-24 px-6 pb-100" >
            <div className="fixed inset-x-0 top-0 z-10 border-b border-white/5 bg-zinc-950 backdrop-blur-sm p-4">
                <div className="flex items-center justify-between text-xl">
                    <input className="flex mt-1 rounded-full outline-2 outline-zinc-700" type="text" placeholder="name..." />
                    <OpenModalBtn onAccept={addItem} item={{ password: '', webPage: '' }} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-dvh pt-20 mx-4">
                {
                    items.map(data => (<PasswordCard data={data} key={data.webPage} />))
                }
            </div>
        </div>
    )

};




export default DashBoard;