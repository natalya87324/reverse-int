module.exports = function reverse(n) {
    const str = n.toString();
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i -= 1) {
        reverse += str[i];
    }

    return parseInt(reverse, 10);
};
