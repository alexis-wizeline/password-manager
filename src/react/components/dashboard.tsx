import React, {useEffect, useState} from "react";

import PasswordCard from "./passwordCard";
import OpenModalBtn from "./openModalBtn";


const generateMockData = (quantity = 1):  Array<{ name: string, password: string}> => {
    const result: Array<{ name: string, password: string }> = new Array<{ name: string, password: string }>();
    for (let i = 1; i <= quantity; i++) {
        result.push({ name: `${i}.test`, password: `${(Math.random() * 10000).toString(36).replace('.', '')}`});
    }
    return result;
}

const mockData = generateMockData(5);




const DashBoard : React.ComponentType = () => {
    const [items, setItems] = useState<Array<{ name: string; password: string }>>([]);
    useEffect(() => {
        setItems(mockData)
    },[])


    return (
        <div className="container min-w-screen bg-gray-950" >
            <div className="fixed inset-x-0 top-0 z-10 border-b border-gray-900 bg-sky-950 p-4">
                <div className="flex items-center justify-between text-xl">
                    <input className="flex mt-1 rounded-full outline-2 outline-zinc-700" type="text" placeholder="name..."/>
                    <OpenModalBtn />
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