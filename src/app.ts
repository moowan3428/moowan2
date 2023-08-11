function sortByFrequencyAndValue(inputArray: number[]): number[] {
    const frequencyMap = new Map<number, number>();

    // Count the frequency of each number
    for (const num of inputArray) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Sort the array based on frequency and then value
    const sortedArray = inputArray.sort((a, b) => {
        const freqComparison = frequencyMap.get(a)! - frequencyMap.get(b)!;
        if (freqComparison !== 0) {
            return freqComparison;
        }
        return a - b;
    });

    return sortedArray;
}

const input = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];
const sortedOutput = sortByFrequencyAndValue(input);
console.log(sortedOutput);
