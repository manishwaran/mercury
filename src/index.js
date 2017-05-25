import Helper from './utils';
import LocaleTree from './locale-tree';

export default class Mercury {

  constructor(HTMLDocument, options = {}) {
    this.HTMLDocument = HTMLDocument;
    this.screenWidth = options.screenWidth || null;
    this.screenHeight = options.screenHeight || null;
    this.helper = new Helper();
    this.localeTree = new LocaleTree();
  }

  initProcess() {
    this.helper.removeScriptsTags(this.HTMLDocument);
  }

  constructTree() {
    const body = this.HTMLDocument.querySelector('body');
    this.localeTree.constructLocaleTree(body);
  }

}
