import accumulate, {findPairAndSingleElements, categorizeNumbers} from './accumulate';

it('accumulate list of numbers', () => {
    expect(accumulate([0, 1, 2, 3, 4, 5]))
        .toEqual(27);

    expect(accumulate([-1, 0, 1]))
        .toEqual(1);

    expect(accumulate([1, 1]))
        .toEqual(2);

    expect(accumulate([0, 1, 1, 5]))
        .toEqual(7);
});

it('find pair and single elements', () => {
    expect(findPairAndSingleElements([0, 1, 2, 3, 4, 5]))
        .toEqual({
            pairs: [[5, 4], [3, 2]],
            singles: [1, 0],
        });

    expect(findPairAndSingleElements([-1, 0, 1]))
        .toEqual({
            pairs: [[-1, 0]],
            singles: [1],
        });
    
    expect(findPairAndSingleElements([1, 1]))
        .toEqual({
            pairs: [],
            singles: [1, 1],
        });
    
    expect(findPairAndSingleElements([0, 1, 1, 5]))
        .toEqual({
            pairs: [],
            singles: [5, 1, 1, 0],
        });
});

it('categorize elements', () => {
    expect(categorizeNumbers([-4, -2, -1, 0, 4, 3, 1, 8]))
        .toEqual({
            negatives: [-4, -2, -1, 0],
            positives: [8, 4, 3, 1],
        });
    
    expect(categorizeNumbers([-1, -2, 5, -2, 8, 8, 4, 0, -11, 1]))
        .toEqual({
            negatives: [-11, -2, -2, -1, 0],
            positives: [8, 8, 5, 4, 1],
        });
});
