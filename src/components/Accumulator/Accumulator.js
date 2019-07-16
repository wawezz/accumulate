import React, { useState, useCallback } from 'react';

import './Accumulator.scss';
import accumulate, { findPairAndSingleElements } from '../../helpers/accumulate';

const Accumulator = () => {
    const [input, setInput] = useState('');
    const [value, setValue] = useState(null);
    
    const [pairElements, setPairElements] = useState(null);
    const [singleElements, setSingleElements] = useState(null);

    const handleAccumulate = useCallback(() => {
        const numbers = input
            .replace(new RegExp(', ', 'g'), ',')
            .replace(new RegExp(' ,', 'g'), ',')
            .split(',')
            .map(Number);

        setValue(accumulate(numbers));

        const {pairs, singles} = findPairAndSingleElements(numbers);
        setPairElements(pairs);
        setSingleElements(singles);
    }, [input, setValue]);

    const pairElementList = pairElements && pairElements.map(pair => pair.join(' and ')).join(', ');
    const singleElementList = singleElements && singleElements.join(', ');

    return <div className='Accumulator'>
        <div className='Accumulator__form'>
            <input
                value={input}
                onChange={event => setInput(event.currentTarget.value)}
                placeholder='Numbers separated by comma'
            />
            <button onClick={handleAccumulate}>Accumulate</button>
        </div>
        <table>
            <tbody>
                <tr>
                    <td>
                        Result: 
                    </td>
                    <td>
                        {value}
                    </td>
                </tr>
                <tr>
                    <td>
                        Pair Elements: 
                    </td>
                    <td>
                        {pairElementList}
                    </td>
                </tr>
                <tr>
                    <td>
                        Single Elements: 
                    </td>
                    <td>
                        {singleElementList}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>;
};

export default Accumulator;
