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
 * @return {boolean}
 */

const isSymmetric = function (root) {
    // 접근 방식: dfs
    // 시간 : O(n)
    // 공간 : O(1)
    if (!root) return false;

    return dfs(root.left, root.right);
};

const dfs = function (left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return dfs(left.left, right.right) && dfs(left.right, right.left);
}