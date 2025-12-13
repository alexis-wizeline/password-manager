import React from 'react';
import { Plus } from "lucide-react";
import { useModal } from "../providers/modalProvider";
import PasswordModal from "../components/passwordModal";

import { Password } from '../../db/entities'



interface OpenModalBtnProps {
    onAccept: (item: Password) => Promise<void>;
    item: Password;
}


const OpenModalBtn = (props: OpenModalBtnProps) => {
    const { open, setOpen } = useModal();
    const { onAccept, item } = props


    return (
        <React.Fragment>
            {open && <PasswordModal onAccept={onAccept} item={item} />}
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white
            hover:cursor-pointer shadow-lg shadow-brand/20 transition-all hover:bg-indigo-400 hover:shadow-indigo-400/30 active:scale-95" onClick={() => setOpen(true)}>
                <Plus strokeWidth={3} size={20} />
            </button>
        </React.Fragment>
    )
}


export default OpenModalBtn;