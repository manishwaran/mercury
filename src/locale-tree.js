import Position from './position';
import COS from 'css-optimum-selector';

import TreeNode from './tree-node';

export default class LocaleTree {

  constructor(screenWidth, screenHeight) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.position = new Position();
    this.tree = null;
    this.cos = new COS();
  }

  checkVisiblePoint(position) {
    return (
      position.x <= this.screenWidth &&
      position.y <= this.screenHeight &&
      position.width &&
      position.height
    );
  }

  constructLocaleTree(
    domTree,
    localeTree = new TreeNode({
        x:0,
        y: 0,
        width: this.screenWidth,
        height: this.screenHeight,
      },
      'window'
    )
  ) {
    const position = this.position.getLocale(domTree);
    if (!this.checkVisiblePoint(position)) {
      return localeTree;
    }
    const selector = this.cos.getUniqueCssSelector($(domTree))
    const node = new TreeNode(position, domTree.tagName.toLowerCase());
    localeTree[selector] = node;
    const childNodes = domTree.children;
    for (let i = 0; i < childNodes.length; i++) {
      this.constructLocaleTree(childNodes[i], localeTree[selector]);
    }
    return localeTree;
  }

}
