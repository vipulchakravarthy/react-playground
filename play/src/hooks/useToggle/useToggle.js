import { useState } from 'react';

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function setToggle(value) {
        setValue(currentValue => {
            return typeof value === 'boolean' ? value : !currentValue;
        })
    }

    return [value, setToggle];
}
