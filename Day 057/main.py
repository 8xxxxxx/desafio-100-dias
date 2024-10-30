class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        # Function to insert a new value into the tree
        if self.root is None:
            self.root = Node(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, current_node, value):
        # Recursive helper function to insert the value at the correct position
        if value < current_node.value:
            if current_node.left is None:
                current_node.left = Node(value)
            else:
                self._insert_recursive(current_node.left, value)
        elif value > current_node.value:
            if current_node.right is None:
                current_node.right = Node(value)
            else:
                self._insert_recursive(current_node.right, value)
        # Duplicates are not inserted

    def search(self, value):
        # Function to search for a value in the tree
        return self._search_recursive(self.root, value)

    def _search_recursive(self, current_node, value):
        # Recursive helper function to search for the value
        if current_node is None:
            return False  # Value not found
        if value == current_node.value:
            return True  # Value found
        elif value < current_node.value:
            return self._search_recursive(current_node.left, value)
        else:
            return self._search_recursive(current_node.right, value)

# Example usage
bst = BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)

# Search for elements
print(bst.search(7))   # Output: True
print(bst.search(3))   # Output: False
