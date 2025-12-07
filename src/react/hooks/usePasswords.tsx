import {useCallback, useEffect, useState} from 'react';

import { Password } from '../../db/entities';


function usePasswords(): {
    items: Array<Password>;
    addItem: (item: Password) => Promise<void>;
} {
    const [items, setItems] = useState<Array<Password>>([]);

    const getItems = useCallback(async () => {
        return await window.passwordApi.getPasswords();
    }, [])

    useEffect(() => {
       async function setPasswords(): Promise<void> {
            const passwords = await getItems()
           console.log('setPasswords', passwords)
           setItems(passwords);
       }

        setPasswords();
    }, [])

    async function addItem(item: Password): Promise<void> {
        const isAdded = await window.passwordApi.add(item);
        console.log(isAdded);

        const passwords = await getItems()
        console.log(passwords);
        setItems(passwords);
    }


    return {items, addItem};
}


export default usePasswords;