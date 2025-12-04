import {useCallback, useEffect, useState} from 'react';


const generateMockData = (quantity = 1):  Array<{ name: string, password: string}> => {
    const result: Array<{ name: string, password: string }> = new Array<{ name: string, password: string }>();
    for (let i = 1; i <= quantity; i++) {
        result.push({ name: `https://is-a-huge-text.${i}.test`, password: `${(Math.random() * 10000).toString(36).replace('.', '')}`});
    }
    return result;
}

function usePasswords(): {
    items: Array<{ name: string, password: string }>;
    addItem: (item: { name: string, password: string }) => void;
} {
    const [items, setItems] = useState<Array<{ name: string; password: string }>>([]);

    const getItems = useCallback((quantity: number) => {
        return generateMockData(quantity);
    }, [])

    useEffect(() => {
        setItems(getItems(3));
    }, [])

    function addItem(item: { name: string; password: string }): void {
        setItems([...items, item]);
    }


    return {items, addItem};
}


export default usePasswords;