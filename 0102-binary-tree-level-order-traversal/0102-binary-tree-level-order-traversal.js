/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 접근 방식: BFS를 사용하여 해결하면 될 듯함, 하지만 큐안쓰고 DFS로 풀려서 DFS로 푼듯함
    // 시간 복잡도: O(V+E)
    // 공간 복잡도: ?? O(V^2)
    if (!root) return [];

    const level = 0;
    const nextLevel = level + 1;
    let arr = [];

    arr[level] = [root.val];
    dfs(root.left, nextLevel, arr);
    dfs(root.right, nextLevel, arr);
  
    return arr;
};

const dfs = function(node, level, arr) {
    if (!node) return;

    const nextLevel = level + 1;

    if (!arr[level]) {
        arr[level] = [node.val];
    } else {
        arr[level].push(node.val);
    }

    dfs(node.left, nextLevel, arr);
    dfs(node.right, nextLevel, arr);
    
    return;
}