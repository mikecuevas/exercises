/*

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Ex1:
Input: p = [1,2,3], q = [1,2,3]
Output: true

Ex2: 
Input: p = [1,2], q = [1,null,2]
Output: false

*/

class MyTreeNode {
    val: number;
    left: MyTreeNode | null;
    right: MyTreeNode | null;
    constructor(val?: number, left?: MyTreeNode | null, right?: MyTreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function isSameTree(p: MyTreeNode | null, q: MyTreeNode | null): boolean {
    // Se ambas as árvores estão vazias, elas são idênticas.
    if (!p && !q) return true;
    
    // Se uma das árvores está vazia e a outra não, elas não são idênticas.
    if (!p || !q) return false;
    
    // Se os valores dos nós atuais são diferentes, as árvores não são idênticas.
    if (p.val !== q.val) return false;
    
    // Recursivamente verifica se os filhos esquerdos são idênticos
    // e se os filhos direitos são idênticos.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
