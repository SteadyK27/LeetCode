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

var isBalanced = function(root) {
    // If the tree is empty, we can say it’s balanced...
    if (root == null)  return true;
    // Height Function will return -1, when it’s an unbalanced tree...
	if (Height(root) == -1)  return false;
	return true;
}
// Create a function to return the “height” of a current subtree using recursion...
var Height = function(root) {
    // Base case...
	if (root == null)  return 0;
    // Height of left subtree...
	let leftHeight = Height(root.left);
    // Height of height subtree...
	let rightHight = Height(root.right);
    // In case of left subtree or right subtree unbalanced, return -1...
	if (leftHeight == -1 || rightHight == -1)  return -1;
    // If their heights differ by more than ‘1’, return -1...
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
    // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...
	return Math.max(leftHeight, rightHight) + 1;
};

// var isBalanced = function(root) {
//     // 초기 생각 : 이진 트리 ? 깊이 탐색(재귀)으로 풀어보자. 깊이 중첩해서 더해서 비교해보자
//     // time-complexity: O(n)
//     // space-complexity: O(1)

//     let result = true;

//     if (root) {
//         if (Math.abs(explore(root.left) - explore(root.right)) > 1) {
//             result = false;
//         } else {
//             result = true;
//         }
//     }

//     return result;
// };

//  const explore = function(node) {
//     if (node === null) return 0;

//     let result = 0;

//     result += 1;

//     result += Math.max(explore(node.left), explore(node.right));

//     return result;
// };
