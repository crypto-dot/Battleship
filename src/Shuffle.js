export const shuffle = (arr) => {
    let i, j, x;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}
export const getRandomPosArr = (size) => {
    const MAX_GRID_COUNT = 100;
    let arr = [];

    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * MAX_GRID_COUNT));
    }
    return arr;
}