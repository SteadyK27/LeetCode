/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
    explore(image, sr, sc, color, image[sr][sc]);

    return image;
};

const explore = function(image, sr, sc, color, firstColor) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) return;
    if (image[sr][sc] !== firstColor || image[sr][sc] === color) return;

    image[sr][sc] = color;

    explore(image, sr , sc - 1, color, firstColor);
    explore(image, sr - 1, sc, color, firstColor);
    explore(image, sr + 1 , sc, color, firstColor);
    explore(image, sr, sc + 1, color, firstColor);

    return;
}