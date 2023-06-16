/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    let maxPrice = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const diff = prices[right] - prices[left];

            if (maxPrice < diff) maxPrice = diff;
        } else {
            left = right;
        }

        right++;
    }

    return maxPrice;
}