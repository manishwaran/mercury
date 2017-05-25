import _ from 'lodash';
import TreeNode from './tree-node';

export default class SerializeGraph {

  constructor(options) {
    this.maxHeight = options.maxHeight;
    this.maxWidth = options.maxWidth;
    this.relativeBigCrave = null
  }

  checkPositionChange(parentPosition, childPosition) {
    return ((parentPosition.x !== childPosition.x) || (parentPosition.y !== childPosition.y));
  }

  getElementVisibleHeight(position) {
    if (position.height > this.maxHeight) {
      return this.maxHeight - position.x;
    }
    return position.height;
  }

  getElementVisibleWidth(position) {
    return position.width;
  }

  checkForBreakingPoint(parentPosition, childPosition, parentSelector) {
    const parentHeight = this.getElementVisibleHeight(parentPosition);
    const childHeight = this.getElementVisibleHeight(childPosition);
    const parentWidth = this.getElementVisibleWidth(parentPosition);
    const childWidth = this.getElementVisibleWidth(childPosition);
    const positionChange = this.checkPositionChange(parentPosition, childPosition);
    if (!positionChange) {
      return false;
    }
    if (parentPosition.x !== childPosition.x && childWidth < parentWidth) {
      return true;
    }
    return false;
  }

  area(position) {
    return (position.width * position.height);
  }

  setRelativeBigCrave(crave, selector) {
    if (!this.relativeBigCrave || this.area(crave.position) > this.area(this.relativeBigCrave.position)) {
      this.relativeBigCrave = { position: crave.position, selector };
    }
    return this.relativeBigCrave;
  }

  discoverCrave(tree, parentNode, parentSelector = null) {
    const clonedTree = _.cloneDeep(tree)
    if (this.checkForBreakingPoint(parentNode.position, tree.position, parentSelector)) {
      console.log(parentSelector);
      return this.setRelativeBigCrave(parentNode, parentSelector);
    }
    const childNodeSelectors = Object.keys(_.omit(clonedTree, ['name', 'position']));
    let relativeBigCrave = null;
    childNodeSelectors.forEach((childSelector) => {
      this.discoverCrave(tree[childSelector], tree, childSelector);
    });
    return relativeBigCrave;
  }

}
