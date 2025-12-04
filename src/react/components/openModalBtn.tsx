import React from 'react';
import {Plus} from "lucide-react";
import {useModal} from "../providers/modalProvider";



const OpenModalBtn = () => {

    const { setOpen } = useModal();

    return (
        <button className=" flex hover:bg-gray-700 rounded-full bg-gray-950/70 mt-1" onClick={() => setOpen(true)}>
            <Plus strokeWidth={4}/>
        </button>
    )
}


export default OpenModalBtn;