import Helper from './utils';
import LocaleTree from './locale-tree';

import GraphSerializer from './serialize-graph';

export default class Mercury {

  constructor(HTMLDocument, options = {}) {
    this.HTMLDocument = HTMLDocument;
    this.screenWidth = options.screenWidth || null;
    this.screenHeight = options.screenHeight || null;
    this.helper = new Helper();
    this.localeTree = new LocaleTree(options.screenWidth, options.screenHeight);
  }

  initProcess() {
    this.helper.removeScriptsTags(this.HTMLDocument);
  }

  constructTree() {
    const body = this.HTMLDocument.querySelector('body');
    return this.localeTree.constructLocaleTree(body);
  }

  getContentBlock() {
    this.initProcess();
    const tree = this.constructTree();
    console.log(tree);
    const graphSerializer = new GraphSerializer({
      maxHeight: this.screenHeight,
      maxWidth: this.screenWidth,
    });
    graphSerializer.discoverCrave(tree.body, tree, 'body');
    console.log(graphSerializer.relativeBigCrave);
  }

}
