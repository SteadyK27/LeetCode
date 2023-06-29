/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
// const hasCycle = function(head) {
//     // 접근 방법: 플로이드 순환 참조 중 순환 리스트 판단하는 로직으로 풀어보기(투 포인터)
//     // 시간 복잡도: O(n)
//     // 공간 복잡도: O(1)
//     if (head === null || head.next === null) return false;
    
//     let slow = head.next;
//     let fast = head.next.next;

//     while (fast && fast.next) {
//         if (!slow || !fast) return false;
//         if (slow.val === fast.val && slow !== fast) return true;

//         slow = slow.next;
//         fast = fast.next.next;
//     }

//     return false;
// };