import {useCallback, useEffect, useState} from 'react';

import { Password } from '../../db/entities';


function usePasswords(): {
    items: Array<Password>;
    addItem: (item: Password) => void;
} {
    const [items, setItems] = useState<Array<Password>>([]);

    const getItems = useCallback(async (quantity: number) => {
        return await window.passwordApi.getPasswords(quantity);
    }, [])

    useEffect(() => {
       async function setPasswords(): Promise<void> {
            const passwords = await getItems(4)
           setItems(passwords);
       }

        setPasswords();
    }, [])

    function addItem(item: Password): void {
        setItems([...items, item]);
    }


    return {items, addItem};
}


export default usePasswords;