import React from 'react';

import PasswordCard from "./passwordCard";
import OpenModalBtn from "./openModalBtn";

import usePasswords from "../hooks/usePasswords";




const DashBoard : React.ComponentType = () => {
    const { items, addItem } = usePasswords();


    return (
        <div className="container min-w-screen bg-gray-950" >
            <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-900 bg-sky-950 p-4">
                <div className="flex items-center justify-between text-xl">
                    <input className="flex mt-1 rounded-full outline-2 outline-zinc-700" type="text" placeholder="name..."/>
                    <OpenModalBtn onAccept={addItem} item={{password: '', name: ''}} />
                </div>
            </div>

            <div className="grid grid-cols-3 min-h-dvh pt-20 gap-3 mx-4 pb-2">
                {
                    items.map(data => ( <PasswordCard data={data} key={data.name} />))
                }
            </div>
        </div>
    )

};




export default DashBoard;