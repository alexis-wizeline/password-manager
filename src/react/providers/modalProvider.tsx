import React, {createContext, useContext, useState} from 'react';
// import PasswordModal from "../components/passwordModal";

interface ModalContext {
    open: boolean;
    setOpen(open: boolean):void;
}

interface ModalProviderProps {
    children: React.ReactNode;
}

const defaultCtx: ModalContext = {
    open: false,
    setOpen() {
        this.open = false;
    }
}

const ctx = createContext<ModalContext>(defaultCtx);

export const ModalProvider = ({ children }:ModalProviderProps) => {
    const [open, setOpen] = useState(true);

    return (
        <ctx.Provider value={{open, setOpen}}>
            {children}
        </ctx.Provider>
    )
}


export const useModal = () => useContext(ctx);