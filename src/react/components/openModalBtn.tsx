import React from 'react';
import {Plus} from "lucide-react";
import {useModal} from "../providers/modalProvider";
import PasswordModal from "../components/passwordModal";



interface OpenModalBtnProps {
    onAccept: (item: { password: string, name: string }) => void;
    item: { password: string, name: string };
}


const OpenModalBtn = (props: OpenModalBtnProps) => {
    const { open, setOpen } = useModal();
    const { onAccept, item = {name: '', password: ''}  } = props


    return (
        <React.Fragment>
            {open && <PasswordModal onAccept={onAccept} item={item}  />}
            <button className=" flex hover:bg-gray-700 rounded-full bg-gray-950/70 mt-1" onClick={() => setOpen(true)}>
                <Plus strokeWidth={4}/>
            </button>
        </React.Fragment>
    )
}


export default OpenModalBtn;