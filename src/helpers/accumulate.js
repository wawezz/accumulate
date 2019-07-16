const sumReducer = (prev, current) => prev + current;
const multiplyReducer = (prev, current) => prev * current;

// Devide set of numbers to positives and negatives
// in order to sort anc accumulate them correctly
export const categorizeNumbers = numbers => {
    const negatives = numbers
        .filter(n => n <= 0)
        .sort((a, b) => a - b);

    const positives = numbers
        .filter(n => n > 0)
        .sort((a, b) => b - a);
    
    return {
        negatives,
        positives,
    };
};

// Extract pair number coubles and single numbers from list
// in order to have pure set to accumulate and show later
export const findPairAndSingleElements = numbers => {
    const pairs = [];
    const singles = [];

    const {
        negatives,
        positives,
    } = categorizeNumbers(numbers);

    // Determine singles and pairs by predicting multiplying result
    // If one of pair member is 1, so keep it single, because there is
    // no value in multiplying by 1
    [positives, negatives].forEach(elements => {
        for (let i = 0; i < elements.length; i++) {
            const pair = [elements[i], elements[i + 1]];
            
            // Case when program reach last element in list
            if (pair[1] === undefined) {
                singles.push(pair[0]);
                break;
            }
    
            const isPaired = pair[1] !== 1;
            
            if (isPaired) {
                pairs.push(pair);
                i++;
            }
            else {
                singles.push(pair[0]);
            }
        }
    });
    
    return {
        pairs,
        singles,
    };
};


// Accumulating both pairs and singles to have highest value
const accumulator = numbers => {
    const {
        pairs,
        singles,
    } = findPairAndSingleElements(numbers);

    let value = 0;

    // Reducing pair element coubles by multiplying them
    value += pairs.length ? pairs.reduce((acc, value) => acc += value.reduce(multiplyReducer, 1), 0) : 0;

    // Reducing single elements by addition
    value += singles.length ? singles.reduce(sumReducer, 0) : 0;
    
    return value;
};

// Entry point of module for accumulation
const accumulate = numbers => {
    const {
        negatives,
        positives,
    } = categorizeNumbers(numbers);

    return accumulator(negatives) + accumulator(positives);
};

export default accumulate;
