import { AnyNode } from 'domhandler';

const nodeUtils = {
  /**
   * Find a node in an array of nodes by tag
   * @param {AnyNode[]} nodes - Array of nodes to search within
   * @param {string} tag - The tag name to search for
   * @returns {AnyNode | undefined} - The first node that matches the tag, or undefined if not found
   */
  findNode: (nodes: AnyNode[], tag: string): AnyNode | undefined => {
    return nodes.find((node) => 'name' in node && node.name === tag);
  },

  /**
   * Filter an array of nodes by tag
   * @param {AnyNode[]} nodes - Array of nodes to filter
   * @param {string} tag - The tag name to filter by
   * @returns {AnyNode[]} - Array of nodes that match the tag
   */
  findNodes: (nodes: AnyNode[], tag: string): AnyNode[] => {
    return nodes.filter((node) => 'name' in node && node.name === tag);
  },

  /**
   * Check if all nodes have at least one of the specified attributes
   * @param {AnyNode[]} domNodes - Array of nodes to check
   * @param {string[]} attributes - Array of attribute names to check for
   * @returns {boolean} - True if all nodes have at least one of the specified attributes, false otherwise
   */
  allNodesHaveAttribute: (
    domNodes: AnyNode[],
    attributes: string[]
  ): boolean => {
    return domNodes.every(
      (node) =>
        'attribs' in node && attributes.some((attr) => attr in node.attribs)
    );
  },

  /**
   * Check if any node in an array has a specific attribute
   * @param {AnyNode[]} nodes - Array of nodes to check
   * @param {string} attribute - The attribute name to check for
   * @returns {boolean} - True if at least one node has the attribute, false otherwise
   */
  hasAttribute: (nodes: AnyNode[], attribute: string): boolean => {
    return nodes.some(
      (node) => node && 'attribs' in node && node.attribs[attribute]
    );
  },

  /**
   * Get all attributes from a node
   * @param {AnyNode} node - The node to retrieve attributes from
   * @returns {{ [name: string]: string } | undefined} - Object containing the node's attributes, or undefined if none exist
   */
  getNodeAttributes: (
    node: AnyNode
  ): { [name: string]: string } | undefined => {
    return 'attribs' in node ? node.attribs : undefined;
  },

  /**
   * Get a specific attribute from a node
   * @param {AnyNode} node - The node to retrieve the attribute from
   * @param {string} attr - The attribute name to retrieve
   * @returns {string | undefined} - The attribute's value, or undefined if the attribute does not exist
   */
  getNodeAttribute: (node: AnyNode, attr: string): string | undefined => {
    return 'attribs' in node ? node.attribs[attr] : undefined;
  },

  /**
   * Get the text data from a node
   * @param {AnyNode} node - The node to retrieve data from
   * @returns {string | undefined} - The text content of the node, or undefined if not applicable
   */
  getNodeData: (node: AnyNode): string | undefined => {
    return 'children' in node && node.children[0] && 'data' in node.children[0]
      ? node.children[0].data
      : undefined;
  },
};

const {
  findNode,
  findNodes,
  allNodesHaveAttribute,
  hasAttribute,
  getNodeAttributes,
  getNodeAttribute,
  getNodeData,
} = nodeUtils;

export {
  allNodesHaveAttribute,
  findNode,
  findNodes,
  getNodeAttribute,
  getNodeAttributes,
  getNodeData,
  hasAttribute,
};
