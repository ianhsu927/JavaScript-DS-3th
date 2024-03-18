function lengthOfLongestSubstring(s: string): number {
    let sArr = Array.from(s);
    let sSet = new Set(sArr);
    if (sSet.size <= 2) {
        return sSet.size;
    }
    let _arr: string[] = [];
    let max = 0;
    sArr.forEach(char => {
        if (!_arr.includes(char)) {
            _arr.push(char);
            max < _arr.length && (max = _arr.length)
        } else {
            let _index = _arr.findIndex((value, index) => {
                return value === char;
            });
            _arr = _arr.slice(_index + 1);
            _arr.push(char);
        }
    })
    return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));