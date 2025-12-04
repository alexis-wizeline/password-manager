import {useCallback, useEffect, useState} from 'react';

import { Password } from '../../db/entities';


const generateMockData = (quantity = 1):  Array<Password> => {
    const result: Array<Password> = new Array<Password>();
    for (let i = 1; i <= quantity; i++) {
        const password = new Password(`https://is-a-huge-text.${i}.test`,`${(Math.random() * 10000).toString(36).replace('.', '')}`)
        result.push(password);
    }
    return result;
}

function usePasswords(): {
    items: Array<Password>;
    addItem: (item: Password) => void;
} {
    const [items, setItems] = useState<Array<Password>>([]);

    const getItems = useCallback((quantity: number) => {
        return generateMockData(quantity);
    }, [])

    useEffect(() => {
        setItems(getItems(3));
    }, [])

    function addItem(item: Password): void {
        setItems([...items, item]);
    }


    return {items, addItem};
}


export default usePasswords;